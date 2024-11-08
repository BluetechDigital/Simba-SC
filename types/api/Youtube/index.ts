// YOUTUBE TYPES
export namespace IYoutube {
	export type IProps = {
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
	export type IYoutubePlaylists = {
		id: string;
	}[];
	export type IYoutubeVideos = {
		kind: string;
		etag: string;
		id: string;
		videoId: string;
		snippet: {
			publishedAt: string;
			channelId: string;
			title: string;
			description: string;
			thumbnails: {
				default: {url: string; width: number; height: number};
				medium: {url: string; width: number; height: number};
				high: {url: string; width: number; height: number};
				[key: string]: {url: string; width: number; height: number} | undefined;
			};
			channelTitle: string;
			tags?: string[];
			categoryId: string;
			liveBroadcastContent: string;
			localized: {
				title: string;
				description: string;
			};
			defaultAudioLanguage?: string;
		};
		status: {
			uploadStatus: string;
			privacyStatus: string;
			license: string;
			embeddable: boolean;
			publicStatsViewable: boolean;
			madeForKids: boolean;
		};
		statistics: {
			viewCount: string;
			likeCount: string;
			favoriteCount: string;
			commentCount: string;
		};
	}[];
}
