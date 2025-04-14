"use client";

// Imports
import {gsap} from "gsap";
import {motion, MotionValue} from "framer-motion";
import {FC, useEffect, useRef} from "react";
import DOMPurify from "isomorphic-dompurify";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Type definition for props
type ITextRevealBlurEffect = {
	content: string;
	className?: string;
	scrollOpacity?: MotionValue<number> | any;
};

const TextRevealBlurEffect: FC<ITextRevealBlurEffect> = ({
	content,
	className,
	scrollOpacity,
}) => {
	// Ref for the parent container
	const containerRef = useRef<HTMLDivElement>(null);

	/* Function to sanitize WYSIWYG content */
	const createParagraphMarkup = (paragraphContent: string) => {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	};

	useEffect(() => {
		// Ensure the container ref exists
		if (!containerRef.current) return;

		// Find the paragraph element inside the container
		const paragraphElement = containerRef.current.querySelector("p");
		if (!paragraphElement) return;

		// Split text content into spans
		const splitTextIntoSpans = () => {
			const textContent = paragraphElement.textContent || "";
			const words = textContent.split(" ");
			paragraphElement.innerHTML = ""; // Clear the original content

			words.forEach((word, wordIndex) => {
				const wordSpan = document.createElement("span");
				wordSpan.style.display = "inline-block";

				word.split("").forEach((char) => {
					const charSpan = document.createElement("span");
					charSpan.textContent = char;
					charSpan.style.display = "inline-block";
					wordSpan.appendChild(charSpan);
				});

				paragraphElement.appendChild(wordSpan);

				if (wordIndex < words.length - 1) {
					paragraphElement.appendChild(document.createTextNode(" "));
				}
			});
		};

		// Perform text splitting
		splitTextIntoSpans();

		// Select all character spans
		const chars = paragraphElement.querySelectorAll("span > span");

		// Apply GSAP animation
		const animation = gsap.fromTo(
			chars,
			{
				filter: "blur(10px) brightness(0%)",
				willChange: "filter",
				opacity: "0%",
			},
			{
				filter: "blur(0px) brightness(100%)",
				stagger: 0.035,
				ease: "none",
				opacity: "100%",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom-=15%",
					end: "bottom center+=5%",
					scrub: true,
				},
			}
		);

		// Refresh ScrollTrigger
		ScrollTrigger.refresh();

		// Cleanup on unmount
		return () => {
			animation.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [content]);

	return (
		<motion.div
			ref={containerRef}
			// style={{opacity: scrollOpacity}}
			className={content ? className : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default TextRevealBlurEffect;
