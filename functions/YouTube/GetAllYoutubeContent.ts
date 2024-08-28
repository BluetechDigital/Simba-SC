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
			const url = `${youtubeAPI}/channels?part=snippet,statistics&id=${youtubeChannelId}&key=${youtubeKey}`;

			// Catch Data Lifetime for 24 Hours
			const data = await fetch(url, {
				next: {revalidate: 86400},
			});
			const channelInfo = await data.json();
			return channelInfo?.items[0];
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch Youtube Channel content"
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
