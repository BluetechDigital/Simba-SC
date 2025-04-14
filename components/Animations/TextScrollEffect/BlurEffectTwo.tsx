"use client";

// Imports
import {gsap} from "gsap";
import {motion} from "framer-motion";
import {FC, useEffect, useRef} from "react";
import DOMPurify from "isomorphic-dompurify";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// Text Blur Scroll Effect Reveal Animation
type IBlurEffectTwo = {
	content: string;
	className?: string;
};

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const BlurEffectTwo: FC<IBlurEffectTwo> = ({content, className}) => {
	/* Sanitize the WYSIWYG paragraph content */
	const createParagraphMarkup = (paragraphContent: string) => {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	};

	const wordsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (wordsRef.current) {
			// Get the text content
			const textContent = wordsRef.current.textContent || "";
			const wordsArray = textContent.match(/\b\w+\b/g) || []; // Extract all words

			// Clear the content and dynamically wrap each word in a span
			wordsRef.current.innerHTML = ""; // Remove original content
			wordsArray.forEach((word) => {
				const span = document.createElement("span");
				span.textContent = word;
				wordsRef.current?.appendChild(span);
			});

			// Select all the spans
			const words = wordsRef.current.querySelectorAll("span");

			// Apply the original GSAP animation styling
			gsap.fromTo(
				words,
				{
					filter: "blur(10px) brightness(0%)",
					willChange: "filter",
				},
				{
					ease: "none",
					filter: "blur(0px) brightness(100%)",
					stagger: 0.05,
					scrollTrigger: {
						trigger: wordsRef.current,
						start: "top bottom-=15%",
						end: "bottom center+=15%",
						scrub: true,
					},
				}
			);
		}
	}, []);

	return (
		<motion.div
			ref={wordsRef}
			className={content ? className : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default BlurEffectTwo;
