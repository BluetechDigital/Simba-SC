// Imports
import {Dispatch, SetStateAction} from "react";
import { IYoutube } from "@/api/YouTube/GetAllYoutubeContent";

export namespace IAllPodcastsVideos {
		export type IProps = {
			title: string;
			cta: {
				text: string;
				link: {
					url: string;
					title: string;
					target: string;
				};
			};
		};
		export type ICard = {
			index: number;
			videoId: IYoutube.IYoutubeVideos[0][`videoId`];
			snippet: IYoutube.IYoutubeVideos[0][`snippet`];
			statistics: IYoutube.IYoutubeVideos[0][`statistics`];
		};
		export type IPagination = {
			totalPages: number;
			currentPage: number;
			youtubeVideos: IYoutube.IYoutubeVideos;
			setCurrentPage: Dispatch<SetStateAction<number>>;
		};
		export type IPodcastsVideosGrid = {
			cta: IProps[`cta`];
		};
		export namespace IRecommendations {
			export type IProps = {
				className: string;
				cta: IAllPodcastsVideos.IProps[`cta`];
				podcastsVideos: IYoutube.IYoutubeVideos;
			};
			export type ICard = {
				videoId: IYoutube.IYoutubeVideos[0][`videoId`];
				snippet: IYoutube.IYoutubeVideos[0][`snippet`];
				statistics: IYoutube.IYoutubeVideos[0][`statistics`];
			};
		}
	}