// Imports
import { JSX } from "react";
import {Variants} from "framer-motion";

/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

export namespace IAnimation {
	// 3D Tilt animation effect
	export type IUseTiltEffect = {
		rotateX: number;
		rotateY: number;
		translateX: number;
		translateY: number;
	};

	// Text Effect Reveal
	export type IPresetType = "blur" | "shake" | "scale" | "fade" | "slide";

	export type ITextEffectProps = {
		children: string;
		per?: "word" | "char";
		as?: keyof JSX.IntrinsicElements;
		variants?: {
			container?: Variants;
			item?: Variants;
		};
		className?: string;
		preset?: IPresetType;
	};

	// Title & Paragraph Text Sliced Slant Mask Animation
	export type ITextSlicedSlantMaskAnimation = {
		initial: {
			y: string;
		};
		enter: (i: number) => {
			y: string;
			transition: {
				duration: number;
				ease: number[];
				delay: number;
			};
		};
	};

	// Text Wrap Scroll Effect Reveal Animation
	export type IIntroTextAnimation = {
		title: string;
		endColor?: string;
		className?: string;
		startColor?: string;
	};

	// Text Blur Scroll Effect Reveal Animation
	export type ITextBlurScrollEffect = {
		content: string;
		className?: string;
	};

	// Work Experience Modal Scale Animation
	export type IWorkExperienceModalScaleAnimation = {
		initial: {
			scale: number;
			x: string;
			y: string;
		};
		enter: {
			scale: number;
			x: string;
			y: string;
			transition: {
				duration: number;
				ease: number[];
			};
		};
		closed: {
			scale: number;
			x: string;
			y: string;
			transition: {
				duration: number;
				ease: number[];
			};
		};
	};

	// WhileInView
	export type IInitial = {
		y: number;
		opacity: number;
	};
	export type IInitialTwo = {
		y: number;
		opacity: number;
	};
	export type IFadeIn = {
		opacity: number;
		transition: {
			duration: number;
			delay: number;
			ease: string;
		};
	};
	export type IFadeInTwo = {
		y: number;
		opacity: number;
		transition: {
			delay: number;
			duration: number;
			ease: string;
		};
	};
	export type IFadeInUp = {
		y: number;
		opacity: number;
		transition: {
			delay: number;
			duration: number;
			ease: string;
		};
	};
	export type IStagger = {
		initial: {
			opacity: number;
			y: number;
		};
		animate: {
			opacity: number;
			y: number;
			transition: {
				delay: number;
				duration: number;
				ease: string;
			};
		};
	};
	export type IArrayLoopStaggerChildren = {
		initial: {
			opacity: number;
			y: number;
		};
		animate: (keys: number) => {
			opacity: number;
			y: number;
			transition: {
				delay: number;
				duration: number;
				ease: string;
			};
		};
	};
	export type ISlideInRightInitial = {
		y: number;
		x: number;
		opacity: number;
	};
	export type ISlideInLeftInitial = {
		y: number;
		x: number;
		opacity: number;
	};
	export type ISlideInRightFinish = {
		x: number;
		y: 0;
		opacity: number;
		transition: {
			delay: number;
			duration: number;
			ease: string;
			staggerChildren: number;
		};
	};

	// Work Experience Animation
	export type ITextMiddleImageReveal = {
		initial: {
			width: number;
		};
		open: {
			width: string;
			transition: {
				duration: number;
				ease: number[];
			};
		};
		closed: {
			width: number;
		};
	};

	// Scroll Based Velocity
	export type IVelocityScrollProps = {
		text: string;
		className?: string;
		displayFour: boolean;
		defaultVelocity?: number;
	};
	export type IParallaxProps = {
		children: string;
		baseVelocity: number;
		className?: string;
	};

	// Text Typing Animation
	export type ITextTypingAnimation = {
		text: string;
		color?: any;
		display?: any;
		opacity?: any;
		duration?: number;
		className?: string;
	};

	// Title, Paragraph Text & Content Mask Animation
	export type ITitleTextMaskAnimation = {
		text: string;
		className?: string;
		styleTextColor?: any;
		isPageTitle?: boolean;
	};
	export type IContentMaskAnimation = {
		children: React.ReactNode;
	};
	export type IParagraphTextMaskAnimation = {
		text: string;
		className?: string;
		styleTextColor?: any;
	};

	// Text Scroll Button
	export type ITextScrollButton = {
		className?: string;
		classNameTwo?: string;
		classNameThree?: string;
		styleTextColor?: string;
		children: React.ReactNode;
		styleButtonLineColor?: string;
	};

	export type ITransforms = {
		x: number;
		y: number;
		rotationZ: number;
	}[];
	export type IDisperse = {
		open: (i: any) => {
			x: string;
			y: string;
			rotateZ: number;
			transition: {
				duration: number;
				ease: number[];
			};
			zIndex: number;
		};
		closed: {
			x: number;
			y: number;
			rotateZ: number;
			transition: {
				duration: number;
				ease: number[];
			};
			zIndex: number;
		};
	};
}
