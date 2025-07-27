// Imports
import {Dispatch, SetStateAction} from "react";
import { IYoutube } from "@/api/YouTube/GetAllYoutubeContent";

export namespace IAllYouTubeVideos {
		export type IProps = {
			title: string;
		};
		export type ICard = {
			videoId: IYoutube.IYoutubeVideos[0][`videoId`];
			snippet: IYoutube.IYoutubeVideos[0][`snippet`];
			statistics: IYoutube.IYoutubeVideos[0][`statistics`];
		};
		export type IVideosGrid = {};
		export type IPagination = {
			totalPages: number;
			currentPage: number;
			youtubeVideos: IYoutube.IYoutubeVideos;
			setCurrentPage: Dispatch<SetStateAction<number>>;
		};
	}