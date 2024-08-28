// Imports
import {MotionProps, Transition, Variant} from "framer-motion";

export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type ICountUpStats = {
	number: string;
	suffix?: string;
	decimals?: number;
	paragraph: string;
};
export type IBackToTopButton = {
	link: string;
};
export type ISimbaTVBannerCard = {
	youtubeButton: {
		url: string;
		title: string;
		target: string;
	};
	podcastsButton: {
		url: string;
		title: string;
		target: string;
	};
	fansButton: {
		url: string;
		title: string;
		target: string;
	};
};
export type INewsLatestArticles = {
	slug: string;
	date: string;
	title: string;
	excerpt: string;
	articleType?: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IMegaNavVideoWrapper = {
	children: React.ReactNode;
};
export type ISimbaTVBannerVideos = {
	children: React.ReactNode[];
	className?: string;
	transition?: Transition;
	activeIndex: number;
	variants?: {enter: Variant; center: Variant; exit: Variant};
} & MotionProps;
export type INewsletterFormikForm = {
	formTitle: string;
	textarea: string;
};
