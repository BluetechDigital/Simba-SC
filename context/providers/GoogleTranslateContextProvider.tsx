"use client";

// Imports
import {
    FC,
    memo,
    useRef,
    useMemo,
    useState,
    useEffect,
    useContext,
    useCallback,
    createContext,
} from "react";
import Script from "next/script";
import { IGoogleTranslate } from "@/context/types/context";


declare global {
    interface Window {
        // Defines the structure of the 'google' object injected by the Google Translate script.
        google: {
            translate: {
                // The constructor for the TranslateElement widget, with static InlineLayout property.
                TranslateElement: {
                    new (config: {
                        pageLanguage: string;
                        layout?: any; // layout can be various enums, `any` is a practical compromise here
                        autoDisplay?: boolean;
                    }, elementId: string): void;
                    InlineLayout: {
                        SIMPLE: number; // Google's JS API usually uses numbers for these enum-like values.
                        // You might also see other layouts like:
                        // ORIGINAL: number;
                        // SIMPLE_NO_TOOLBAR: number;
                    };
                };
            };
        };

        // The global callback function that the Google Translate script looks for
        // to initialize the widget.
        googleTranslateElementInit: () => void;
    }
}

// Create the new Google Translate Context
const GoogleTranslateContext = createContext<IGoogleTranslate.IContext | undefined>(undefined);

// Hook to consume the Google Translate Context
export const useGoogleTranslateContext = () => {
    const context = useContext(GoogleTranslateContext);
    if (!context) {
        throw new Error('useGoogleTranslateContext must be used within a GoogleTranslateContextProvider');
    }
    return context;
};

const GoogleTranslateContextProvider: FC<IGoogleTranslate.IContextProvider> = memo(({
    children,
}) => {
    // Internal state to manage whether the widget has been initialized to prevent re-init
    const [widgetInitialized, setWidgetInitialized] = useState(false);
    
    // Ref to track if the main Google Translate script file has loaded
    const scriptTagLoadedRef = useRef(false);

    // This function is assigned to window.googleTranslateElementInit
    // It signals that the core Google Translate library is ready to be used.
    const handleGoogleTranslateScriptReady = useCallback(() => {
        if (typeof window.google !== 'undefined' && window.google.translate) {
            scriptTagLoadedRef.current = true; // Mark the script as loaded
            console.log('Google Translate main script ready.');
            // Crucially, we do NOT initialize the widget here automatically.
        }
    }, []);

    useEffect(() => {
        // Assign the callback to the window object for the Google Translate script to find it.
        window.googleTranslateElementInit = handleGoogleTranslateScriptReady;

        // Cleanup: Clear the widget div if the component unmounts
        return () => {
            const widgetElement = document.getElementById("google_translate_element");
            if (widgetElement) {
                widgetElement.innerHTML = '';
                setWidgetInitialized(false); // Reset initialization status on unmount
            }
        };
    }, [handleGoogleTranslateScriptReady]); // Depend on handleGoogleTranslateScriptReady for stability

    // This function will be exposed via the context and called by the button.
    const initializeGoogleTranslateWidget = useCallback(() => {
        if (scriptTagLoadedRef.current && typeof window.google !== 'undefined' && window.google.translate && !widgetInitialized) {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en", // Set your site's default language
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false, // Essential to prevent auto-display on mobile
                },
                "google_translate_element"
            );
            setWidgetInitialized(true); // Mark widget as initialized
            console.log('Google Translate widget initialized.');
        } else if (!scriptTagLoadedRef.current) {
            console.warn('Google Translate script not yet loaded. Cannot initialize widget. Please wait for the script to load.');
        } else if (widgetInitialized) {
            console.log('Google Translate widget already initialized.');
        }
    }, [widgetInitialized]); // Depend on widgetInitialized

    // The value provided by this context
    const contextValue = useMemo(() => ({
        initializeGoogleTranslateWidget,
        isGoogleTranslateScriptLoaded: scriptTagLoadedRef.current,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [initializeGoogleTranslateWidget, scriptTagLoadedRef.current]);

    return (
        <GoogleTranslateContext.Provider value={contextValue}>
            {children}
            {/* Google Translate script is loaded here by the provider */}
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="lazyOnload"
                id="google-translate-script"
                onLoad={() => {
                    console.log('Script tag itself finished loading via Next.js Script.');
                    // Ensure handleGoogleTranslateScriptReady has been called if it wasn't by 'cb'
                    if (!scriptTagLoadedRef.current) {
                        handleGoogleTranslateScriptReady();
                    }
                }}
                onError={(e) => {
                    console.error('Google Translate script failed to load:', e);
                }}
            />
        </GoogleTranslateContext.Provider>
    );
});

GoogleTranslateContextProvider.displayName = 'GoogleTranslateContextProvider';

export default GoogleTranslateContextProvider;