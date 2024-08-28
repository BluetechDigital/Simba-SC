// YOUTUBE TYPES
export namespace IYoutube {
	export type IYoutube = {
		id: number;
		slug: string;
		price: string;
		title: string;
		currency: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	}[];

	export interface IOnlineStoreShirts extends IYoutube {}
}

export type IYoutubeChannelInfo = {
	title: string;
	description: string;
	customUrl: string;
	publishedAt: any;
	thumbnails: {
		(key: any): {
			url: string;
			width: number;
			height: number;
		};
	};
	defaultLanguage: string;
	localized: {
		title: string;
		description: string;
	};
	country: string;
	viewCount: string;
	subscriberCount: string; // this value is rounded to three significant figures
	hiddenSubscriberCount: boolean;
	videoCount: string;
};
export type IYoutubePlaylists = string;
export type IYoutubeVideos = string;
