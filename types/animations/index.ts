/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// 3D Tilt animation effect
export type UseTiltEffect = {
	rotateX: number;
	rotateY: number;
	translateX: number;
	translateY: number;
};

// WhileInView
export type Initial = {
	y: number;
	opacity: number;
};
export type InitialTwo = {
	y: number;
	opacity: number;
};
export type FadeIn = {
	opacity: number;
	transition: {
		duration: number;
		delay: number;
		ease: string;
	};
};
export type FadeInTwo = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type FadeInUp = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type Stagger = {
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
export type ArrayLoopStaggerChildren = {
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
export type SlideInRightInitial = {
	y: number;
	x: number;
	opacity: number;
};
export type SlideInLeftInitial = {
	y: number;
	x: number;
	opacity: number;
};
export type SlideInRightFinish = {
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

// Content Slice Reveal Mask Animation
export namespace IContentSliceRevealMaskAnimation {
	export type IContentWrapper = {
		className?: string;
		children: React.ReactNode;
	};
	export type IAnimationProps = {
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
}

// ScrollY Progress Based Content Reveal Animation
export namespace IScrollYProgressReveal {
	export type IProps = {
		className?: string;
		children: React.ReactNode;
	};

	export interface IFadeInAnimation extends IProps {}
	export interface ISlideInXAnimation extends IProps {}
}
