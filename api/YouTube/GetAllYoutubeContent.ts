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

// YOUTUBE CONTENT (SIMBA SC)
// Get Youtube Channel
const youtubeAPI = `${process.env.YOUTUBE_API}`;
const youtubeKey = `${process.env.YOUTUBE_KEY}`;
const youtubeChannelId = `${process.env.YOUTUBE_CHANNEL_ID}`;

// Get All Youtube Channel Info
export const getAllYoutubeChannelInfo =
	async (): Promise<IYoutube.IYoutubeChannelInfo> => {
		try {
			const snippetUrl = `${youtubeAPI}/channels?part=snippet&id=${youtubeChannelId}&key=${youtubeKey}`;
			const statisticsUrl = `${youtubeAPI}/channels?part=statistics&id=${youtubeChannelId}&key=${youtubeKey}`;

			// Catch Data indefinitely
			const fetchSnippetData = await fetch(snippetUrl, {
				next: {revalidate: false},
			});

			// Catch Data for 24 Hours before refetching
			const fetchStatisticsData = await fetch(statisticsUrl, {
				next: {revalidate: 86400},
			});

			const snippetData = await fetchSnippetData.json();
			const statisticsData = await fetchStatisticsData.json();

			const data = {
				...snippetData?.items[0]?.snippet,
				...statisticsData?.items[0]?.statistics,
			};

			return data;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch youtube channel content"
			);
		}
	};

// Get All Youtube Playlists
export const getAllYoutubePlaylists =
	async (): Promise<IYoutube.IYoutubePlaylists> => {
		try {
			const playlistIDData: IYoutube.IYoutubePlaylists | any[] = [];

			// Fetch YouTube Playlist Data
			const getPlaylistIdUrl = `${youtubeAPI}/playlists?part=snippet&channelId=${youtubeChannelId}&key=${youtubeKey}`;

			// Cache Data for 24 Hours before refetching
			const relatedPlaylistsData = await fetch(getPlaylistIdUrl, {
				next: {revalidate: 86400},
			});

			const response = await relatedPlaylistsData.json();

			// Collect Video IDs from playlist data
			response?.items?.forEach((item: any) => {
				const object = {id: item?.id};
				playlistIDData.push(object);
			});

			return playlistIDData;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch youtube playlists content"
			);
		}
	};

// Get All Youtube Videos
export const getAllYoutubeVideos =
	async (): Promise<IYoutube.IYoutubeVideos> => {
		try {
			
			const youtubeVideosFullData: IYoutube.IYoutubeVideos | any[] = [];
	
			const searchUrl = `${youtubeAPI}/search?key=${youtubeKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=50&type=video`;
			
			const response = await fetch(searchUrl, {
				next: { revalidate: 3600 }, // 1 hour cache
			});
			
			const data = await response.json();
			const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
			const videosUrl = `${youtubeAPI}/videos?part=snippet,statistics,status&id=${videoIds}&key=${youtubeKey}`;

			const videoDetailsResponse = await fetch(videosUrl, {
				next: { revalidate: 3600 },
			});
			
			const videoDetails = await videoDetailsResponse.json();
			
			// Add `videoId` to match your existing data structure
			const formattedVideos = videoDetails.items.map((video: any) => ({
				...video,
				videoId: video.id,
			}));
			
			youtubeVideosFullData.push(...formattedVideos);
		
				return youtubeVideosFullData;
			

		} catch (error: unknown) {
			console.error(error);
			throw new Error(
				"Something went wrong trying to fetch YouTube videos content"
			);
		}
	};
