// Imports
import { IYoutube } from "@/api/YouTube/GetAllYoutubeContent";
import { MotionProps, Transition, Variant } from "framer-motion";

export namespace ISimbaTVBanner {
	export type IProps = {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		contentOptions: {
			subtitle: string;
			buttonTitle: string;
			contentExcerpt: string;
			buttonFunction: string;
		}[];
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		contentOptions: IProps[`contentOptions`];
	};
	export type IStatsCard = {};
	export type IVideos = {
		children: React.ReactNode[];
		className?: string;
		transition?: Transition;
		activeIndex: number;
		variants?: {enter: Variant; center: Variant; exit: Variant};
	} & MotionProps;
	export type ICountUpStats = {
		number: string;
		suffix?: string;
		decimals?: number;
		paragraph: string;
	};
	export namespace IVideosSlider {
		export type IProps = {
			activeIndex: number;
			transition?: Transition;
			youtubeVideos: IYoutube.IYoutubeVideos;
			variants?: {enter: Variant; center: Variant; exit: Variant};
		} & MotionProps;

		export type ISlide = {
			index: number;
			status: IYoutube.IYoutubeVideos[0][`status`];
			videoId: IYoutube.IYoutubeVideos[0][`videoId`];
			snippet: IYoutube.IYoutubeVideos[0][`snippet`];
			statistics: IYoutube.IYoutubeVideos[0][`statistics`];
		};
	}
}