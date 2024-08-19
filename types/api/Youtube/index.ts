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

export type IYoutubeChannel = string;
export type IYoutubePlaylists = string;
export type IYoutubeVideos = string;
