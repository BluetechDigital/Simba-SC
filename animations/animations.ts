/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// Imports
import {IAnimation} from "@/animations/types/index";

/* This is the default framer-motion scrollYProgress content reveal.
 Provides When in view should the content be revealed */
export const offsetStart: number = 0.9;
export const offsetFinish: number = 0.5;

export const initial: IAnimation.IInitial | any = {
	y: 0,
	opacity: 0,
};
export const initialTwo: IAnimation.IInitialTwo | any = {
	opacity: 0,
};
export const initialThree: IAnimation.IInitial | any = {
	y: 90,
	opacity: 0,
};
export const fadeIn: IAnimation.IFadeIn | any = {
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeOut",
	},
};
export const fadeInTwo: IAnimation.IFadeInTwo | any = {
	y: 0,
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};
export const fadeInUp: IAnimation.IFadeInUp | any = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.5,
		ease: "easeInOut",
	},
};
export const stagger: IAnimation.IStagger | any = {
	initial: {
		opacity: 0,
		y: 0,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1,
			duration: 0.75,
			ease: "easeInOut",
		},
	},
};
export const arrayLoopStaggerChildren: IAnimation.IArrayLoopStaggerChildren | any = {
	initial: {
		opacity: 0,
		y: 0,
	},
	animate: (keys: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 * keys,
			duration: 0.75,
			ease: "easeInOut",
		},
	}),
};
export const navigationMenuStaggerChildren: IAnimation.IArrayLoopStaggerChildren | any = {
	initial: {
		opacity: 0,
		y: 0,
	},
	animate: (keys: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.25 * keys,
			duration: 0.5,
			ease: "easeInOut",
		},
	}),
};

// Slide In Direction (Horizontal)
export const slideInRightInitial: IAnimation.ISlideInRightInitial | any = {
	y: 0,
	x: 200,
	opacity: 0,
};
export const slideInLeftInitial: IAnimation.ISlideInLeftInitial | any = {
	y: 0,
	x: -200,
	opacity: 0,
};
export const slideInRightFinish: IAnimation.ISlideInRightFinish | any = {
	y: 0,
	x: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeInOut",
		staggerChildren: 0.1,
	},
};

export default fadeInUp;