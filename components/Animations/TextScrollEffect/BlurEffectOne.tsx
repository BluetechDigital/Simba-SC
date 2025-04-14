"use client";

// Imports
import {gsap} from "gsap";
import {motion} from "framer-motion";
import {FC, useEffect, useRef} from "react";
import DOMPurify from "isomorphic-dompurify";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// Text Blur Scroll Effect Reveal Animation
type IBlurEffectOne = {
	content: string;
	className?: string;
};

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const BlurEffectOne: FC<IBlurEffectOne> = ({content, className}) => {
	/* Sanitize the WYSIWYG paragraph content */
	const createParagraphMarkup = (paragraphContent: string) => {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	};

	const wordsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (wordsRef.current) {
			// Target all spans inside the element referenced by wordsRef
			const words = wordsRef.current.querySelectorAll("span");

			// Apply GSAP animation to each span
			gsap.fromTo(
				words,
				{
					"will-change": "opacity, transform",
					opacity: 0,
					scale: 0.6,
					filter: "blur(8px)",
					rotationZ: () => gsap.utils.random(-20, 20),
				},
				{
					ease: "power4",
					opacity: 1,
					scale: 1,
					rotation: 0,
					stagger: 0.4,
					filter: "blur(0px)",
					scrollTrigger: {
						trigger: words,
						start: "top 70%",
						end: "bottom top",
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

export default BlurEffectOne;
