"use client";

// Imports
import Script from "next/script";
import { FC, memo, RefObject, useEffect, useRef } from "react";
import { IGoogleTranslate } from "@/context/types/context";

declare global {
    interface Window {
        // Defines the structure of the 'google' object injected by the Google Translate script.
        google: {
            translate: {
                // The constructor for the TranslateElement widget.
                TranslateElement: new (config: {
                    pageLanguage: string;
                    layout?: any; // layout can be various enums, `any` is a practical compromise here
                    autoDisplay?: boolean;
                }, elementId: string) => void;
            };
        };

        // The global callback function that the Google Translate script looks for
        // to initialize the widget.
        googleTranslateElementInit: () => void;
    }
}

const GoogleTranslateContextProvider: FC<IGoogleTranslate.IContextProvider> = memo(({
    children,
}) => {
    // A ref to keep track if the script has been loaded and initialized
    const scriptLoadedRef: RefObject<boolean> = useRef(false);

    // This function is called by the Google Translate script once it's loaded
    const googleTranslateElementInit = () => {
        if (!scriptLoadedRef.current && typeof window.google !== 'undefined' && window.google.translate) {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en", // Set your site's default language
                    // layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Optional: for a smaller dropdown
                },
                "google_translate_element" // The ID of the div where the widget will be rendered
            );
            scriptLoadedRef.current = true; // Mark as initialized
        }
    };

    useEffect(() => {
        // Assign the callback to the window object for the script to find it
        // This must be done BEFORE the script itself loads.
        window.googleTranslateElementInit = googleTranslateElementInit;

        // Cleanup function for when the component unmounts
        return () => {
            // It's tricky to fully "unload" Google Translate, but we can try to clean the div
            const widgetElement = document.getElementById("google_translate_element");
            if (widgetElement) {
                widgetElement.innerHTML = ''; // Clear the widget content
            }
            // You might also want to nullify the global callback if not using Next.js Script's onReady
            // delete window.googleTranslateElementInit;
        };
    }, []); // Run once on mount

    return (
        <>
            {children}
            {/* Use Next.js Script component for better loading control.
                `strategy="lazyOnload"` waits until the browser is idle to load the script.
                `onLoad` or `onReady` ensures the script is available before running logic.
                `id` is good practice for managing the script.
            */}
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="lazyOnload" // Loads after hydration and during idle time
                id="google-translate-script"
                onLoad={() => {
                    // This function is called when the script has successfully loaded.
                    // The `googleTranslateElementInit` callback should already be defined globally.
                    // You might re-call it here if there are issues with the callback firing.
                    // For now, it's enough that `window.googleTranslateElementInit` is set in useEffect.
                    console.log('Google Translate script loaded.');
                }}
                onError={(e) => {
                    console.error('Google Translate script failed to load:', e);
                }}
            />
        </>
    );
});

GoogleTranslateContextProvider.displayName = 'GoogleTranslateContextProvider';

export default GoogleTranslateContextProvider;