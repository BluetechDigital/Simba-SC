// Imports
import {IYoutube} from "@/types/api/Youtube/index";

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
			return "";
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
			/* IF PLAYLIST ID IIS NEEDED TO BE UPDATED OR FETCHED */
			// const getPlaylistIdUrl = `${youtubeAPI}/channels?part=contentDetails&id=${youtubeChannelId}&key=${youtubeKey}`;

			// // Catch Data indefinitely
			// const relatedPlaylistsData = await fetch(getPlaylistIdUrl, {
			// 	next: {revalidate: false},
			// });

			// const response = await relatedPlaylistsData.json();

			// // Get Playlist Id
			// const playlistId = youtubePlaylistId;
			// // const playlistId =
			// // 	response.items[0].contentDetails?.relatedPlaylists?.uploads;

			const fetchVideosData = `${youtubeAPI}/playlistItems?part=snippet,contentDetails,status&playlistId=${youtubePlaylistId}&key=${youtubeKey}&maxResults=50`;

			// Catch Data for 1 Hours before refetching
			const responseVideosData = await fetch(fetchVideosData, {
				next: {revalidate: 3600},
			});

			const videosData = await responseVideosData.json();

			return videosData?.items;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch youtube videos content"
			);
		}
	};
