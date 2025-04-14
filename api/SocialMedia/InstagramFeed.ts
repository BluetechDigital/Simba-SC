export namespace IInstagram {
	export type IFeed = {
		id: string;
		media_type: string;
		media_url: string;
		timestamp: string;
		caption: string;
		permalink: string;
	}[];
}

export const getAllInstagramFeedContent = async (): Promise<IInstagram.IFeed> => {
	const instagramFeedMediaType = `${process.env.INSTAGRAM_FEED_MEDIA_TYPE}`; // Replace with your actual Google Cloud API Key

	const instagramUserToken = `https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_FEED_TEMPORARY_CMS_IMAGE_DIR_URL}`;

	// Instagram Feed Test Data
	const instagramFeedTestDataMediaUrl = `${process.env.INSTAGRAM_FEED_TEMPORARY_CMS_IMAGE_DIR_URL}`;

	try {
		const testData = [
			{
				id: "4769879656789058707",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/461288019_18460538842000432_5515603888248820033_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/C_GQ1dpNQJD/",
				caption: " ",
			},
			{
				id: "6835437698-6846969567956",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465750358_18451020112071034_7777504811051809118_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "54735476547657458",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465879455_18451017844071034_7258849001461608670_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "135467658458945678",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465889932_18451014472071034_1273775082645377418_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "02653794679467576",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465802477_18451006516071034_5543425822872726882_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "6584658965956797756",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465880381_18451004956071034_228703859720686691_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "478976956907568067089",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465937456_18451005721071034_1142687724673402143_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "275368690578076",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/465885979_18450997399071034_5343153329854166774_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "65383696796458760",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/463638417_18447396091071034_2810125477861557023_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "7890789-94567984673",
				media_type: "CAROUSEL_ALBUM",
				media_url: `${instagramFeedTestDataMediaUrl}/463165021_18446656474071034_3281828982713875975_n.jpg`,
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
		];

		// const url = `https://graph.instagram.com/me/${instagramFeedMediaType}&access_token=${instagramUserToken}`;
		// // Catch Data for 24 Hours before refetching
		// const data = await fetch(url, {next: {revalidate: 86400}});
		// const instagramFeed = await data.json();
		// return instagramFeed?.data;
		return testData;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch Instagram feed content"
		);
	}
};
