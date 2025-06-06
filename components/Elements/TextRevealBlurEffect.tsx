"use client";

// Imports
import gsap from "gsap";
import DOMPurify from "isomorphic-dompurify";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, MotionValue } from "framer-motion";
import { FC, memo, useRef, useLayoutEffect, useMemo } from "react"; // Added useLayoutEffect, removed useCallback as it's not strictly needed here

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Type definition for props
type ITextRevealBlurEffect = {
    content: string;
    className?: string;
    scrollOpacity?: MotionValue<number>; // More specific type, removed 'any'
};

const TextRevealBlurEffect: FC<ITextRevealBlurEffect> = memo(({
    content,
    className = '', // Default empty string for className
    scrollOpacity,
}) => {
    // Ref for the parent container (motion.div)
    const containerRef = useRef<HTMLDivElement>(null);

    // Ref for the actual text element that will hold the split characters
    const textRef = useRef<HTMLParagraphElement>(null); // Assuming text is always inside a <p> or specific tag

    // Use useMemo to Sanitize the WYSIWYG paragraph for initial rendering
    const sanitizedContent = useMemo(() => {
        // We still sanitize, but we'll use this primarily for setting innerHTML once,
        // and then the GSAP effect will re-structure it.
        return DOMPurify.sanitize(content);
    }, [content]);

    // Use useLayoutEffect for DOM manipulations that need to happen before paint
    useLayoutEffect(() => {
        // Ensure refs and content exist
        if (!containerRef.current || !textRef.current || !content) {
            return;
        }

        // --- Step 1: Initial render of sanitized content (React controls this) ---
        // This is now done by React's standard rendering of the <p> tag
        // with sanitizedContent as its innerHTML.

        // --- Step 2: Prepare the text for animation (GSAP's concern) ---
        const paragraphElement = textRef.current;

        // Create a temporary div to hold the content and extract text
        // This helps handle cases where the 'content' might have HTML tags
        // within the paragraph (e.g., "This is <strong>bold</strong> text.")
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = sanitizedContent; // Use sanitizedContent here
        const textToSplit = tempDiv.textContent || ""; // Get plain text content

        if (!textToSplit) {
            return; // No text to split
        }

        // Split text content into spans
        const words = textToSplit.split(" ");
        paragraphElement.innerHTML = ""; // Clear the original content

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block"; // Ensure inline-block for proper layout

            word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.textContent = char;
                charSpan.style.display = "inline-block"; // Keep character on its own line for animation
                wordSpan.appendChild(charSpan);
            });

            paragraphElement.appendChild(wordSpan);

            if (wordIndex < words.length - 1) {
                // Add a non-breaking space to maintain word spacing
                paragraphElement.appendChild(document.createTextNode("\u00A0")); // Non-breaking space
            }
        });

        // Select all character spans for animation
        const chars = paragraphElement.querySelectorAll("span > span");

        // --- Step 3: Apply GSAP animation ---
        const animation = gsap.fromTo(
            chars,
            {
                filter: "blur(10px) brightness(0%)",
                willChange: "filter, opacity", // Add opacity to willChange
                opacity: 0, // Use number for opacity
            },
            {
                filter: "blur(0px) brightness(100%)",
                stagger: 0.035,
                ease: "none",
                opacity: 1, // Use number for opacity
                scrollTrigger: {
                    trigger: containerRef.current, // Use the main container as trigger
                    start: "top bottom-=15%",
                    end: "bottom center+=5%",
                    scrub: true,
                    // If you want to see markers during development:
                    // markers: true,
                },
            }
        );

        // Refresh ScrollTrigger after DOM manipulation
        ScrollTrigger.refresh();

        // --- Cleanup on unmount or content change ---
        return () => {
            animation.kill(); // Kill the specific animation timeline
            // It's better to kill only the ScrollTrigger instance associated with this animation
            // gsap.getById(animation.scrollTrigger.id)?.kill(); // If animation.scrollTrigger has an ID
            // Or if you ensure one ScrollTrigger per component:
            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
            // Reset the innerHTML to prevent issues if component re-mounts or content changes without full refresh
            if (textRef.current) {
                textRef.current.innerHTML = ''; // Clear content before potential re-render or re-split
            }
        };
    }, [content]); // Depend on content to re-run effect if content changes

    // Determine main div's class name
    const mainDivClassName = useMemo(() => {
        return content ? className : `hidden`;
    }, [content, className]);

    return (
        <motion.div
            ref={containerRef}
            style={scrollOpacity ? { opacity: scrollOpacity } : undefined} // Conditionally apply opacity if scrollOpacity is provided
            className={mainDivClassName}
        >
            {/* This is the paragraph element that GSAP will target and split. */}
            <p ref={textRef} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
        </motion.div>
    );
});

TextRevealBlurEffect.displayName = 'TextRevealBlurEffect';

export default TextRevealBlurEffect;