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
export type IYoutubePlaylists = any;
export type IYoutubeVideos = {
	snippet: {
		title: string;
		position: number;
		channelId: string;
		playlistId: string;
		publishedAt: string;
		description: string;
		channelTitle: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
			standard: {
				url: string;
				width: number;
				height: number;
			};
			maxres: {
				url: string;
				width: number;
				height: number;
			};
		};
		resourceId: {
			kind: string;
			videoId: string;
		};
		videoOwnerChannelId: string;
		videoOwnerChannelTitle: string;
	};
	contentDetails: {
		videoId: string;
		videoPublishedAt: string;
	};
	status: {
		privacyStatus: string;
	};
}[];
