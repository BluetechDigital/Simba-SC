// Imports
import {
	IYoutubeVideos,
	IYoutubePlaylists,
	IYoutubeChannelInfo,
} from "@/types/api/Youtube/index";

// YOUTUBE CONTENT (SIMBA SC)
// Get Youtube Channel

const youtubeAPI = `${process.env.YOUTUBE_API}`;
const youtubeKey = `${process.env.YOUTUBE_KEY}`;
const youtubeChannelId = `${process.env.YOUTUBE_CHANNEL_ID}`;

export const getAllYoutubeChannelInfo =
	async (): Promise<IYoutubeChannelInfo> => {
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
export const getAllYoutubePlaylists = async (): Promise<IYoutubePlaylists> => {
	let data = "";

	return data;
};

// Get All Youtube Videos
export const getAllYoutubeVideos = async (): Promise<IYoutubeVideos> => {
	let data = "";

	return data;
};
