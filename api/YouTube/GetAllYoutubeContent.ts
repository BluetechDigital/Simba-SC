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
const youtubePlaylistId = `${process.env.YOUTUBE_PLAYLIST_ID}`;

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
			// Prepare arrays for storing video IDs and full data
			const youtubeVideosID: {videoId: string}[] = [];
			const youtubeVideosFullData: IYoutube.IYoutubeVideos | any[] = [];

			// Fetch YouTube Playlist Data
			const fetchVideosData = `${youtubeAPI}/playlistItems?part=snippet,contentDetails,status&playlistId=${youtubePlaylistId}&key=${youtubeKey}&maxResults=50`;

			// Cache Data for 1 Hour before refetching
			const response = await fetch(fetchVideosData, {
				next: {revalidate: 3600},
			});

			// Playlist Videos Data
			const playlistVideosData = await response.json();

			// Collect Video IDs from playlist data
			playlistVideosData?.items?.forEach((item: any) => {
				const object = {videoId: item?.contentDetails?.videoId};
				youtubeVideosID.push(object);
			});

			// Fetch YouTube Videos Full Data via Video IDs
			const fetchPromises = youtubeVideosID.map(async (item) => {
				const fetchVideosFullData = `${youtubeAPI}/videos?part=statistics,snippet,status&id=${item.videoId}&key=${youtubeKey}&maxResults=50`;

				// Cache Data for 1 hour before refetching
				const responseVideosData = await fetch(fetchVideosFullData, {
					next: {revalidate: 3600},
				});

				const videosFullData = await responseVideosData.json();
				// Add videoId to each item and return it
				return videosFullData.items.map((videoData: any) => ({
					...videoData,
					videoId: item.videoId,
				}));
			});

			// Wait for all fetches to complete and flatten results into youtubeVideosFullData
			const fetchedDataArray = await Promise.all(fetchPromises);
			fetchedDataArray.forEach((data) => youtubeVideosFullData.push(...data));

			return youtubeVideosFullData;
		} catch (error: unknown) {
			console.error(error);
			throw new Error(
				"Something went wrong trying to fetch YouTube videos content"
			);
		}
	};
