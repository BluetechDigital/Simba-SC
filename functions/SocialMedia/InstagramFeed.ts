// Imports
import {IInstagramFeed} from "@/types/context/SocialMedia";

export const getAllInstagramFeedContent = async (): Promise<IInstagramFeed> => {
	const instagramFeedMediaType = `${process.env.INSTAGRAM_FEED_MEDIA_TYPE}`; // Replace with your actual Google Cloud API Key

	const instagramUserToken = `https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_USER_TOKEN}`;

	try {
		const testData = [
			{
				id: "4769879656789058707",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/457011505_18454346041000432_6282092770320342504_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=104&_nc_ohc=ycMC-4Bj84MQ7kNvgGLwdXe&_nc_gid=5ff0b3218b8c4f878e3d40874b0d7a33&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjUxMzAwNzg3NzYyMDI5MQ%3D%3D.2-ccb7-5&oh=00_AYBIbhqbZBvU6Mz2y_OSMvHQpdcizIQP9gb58HmMOPxOjg&oe=66D4D230&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/C_GQ1dpNQJD/",
				caption: " ",
			},
			{
				id: "6835437698-6846969567956",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/456979596_18437281393071034_6306948325831267204_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0MjEuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=SHb0hNBmGZMQ7kNvgHz1762&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQ5NzIzNDM3NTE0NzM5OQ%3D%3D.2-ccb7-5&oh=00_AYB5DcGdSs4Ds2Nm15tClqtWdSmndWzZNa-oK5WeZOh8bA&oe=66D4E4FD&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "54735476547657458",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/457048134_18437278957071034_2846403685177133441_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ3eDE2Nzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=GBTmJ_-YEw0Q7kNvgFS9cmf&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQ4OTU5NDg5NDkxOTE1NQ%3D%3D.2-ccb7-5&oh=00_AYAw8N75l_Qsbk7WitLmYI9NCciKeAByAetgKDRVqGne7Q&oe=66D4F174&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "135467658458945678",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/456817600_18437269801071034_167670480399917028_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0MjEuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=M7xpLXPC18kQ7kNvgH_Q0uC&_nc_gid=d816f53fc2334175b9cec8291bc0fc30&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQ2Mzc5OTE2MTk5MjU4MA%3D%3D.2-ccb7-5&oh=00_AYCUo6yoUsprh7cY91ks-ji0KGjio1INcKPdI8dRxkxCIg&oe=66D4E843&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "02653794679467576",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/456978225_18437264782071034_8241123303859692629_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNTIuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=34nHpUunHoYQ7kNvgE9wN7n&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQ1MTAzMzkxNTMxNDE5Ng%3D%3D.2-ccb7-5&oh=00_AYCsJdw9_8TIp_kELGO62SvHhmbKa0XlcYKjHIH2FU_Hqw&oe=66D4EFE6&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "6584658965956797756",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/457103840_18437263393071034_4793360444331522167_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ3eDE2Nzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=QW0dLBM-okQQ7kNvgGMTHyt&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQ0NzAzNzEyOTQ4Mjk5NA%3D%3D.2-ccb7-5&oh=00_AYDrFinzP1uiltPRDz0R3EhTL7ojVdfMWpKaVct8V2BeLw&oe=66D4C9C6&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "478976956907568067089",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/457028871_18437261059071034_1471657335484511637_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=Xu9H0_Z4mZsQ7kNvgF5FdjO&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQzOTc1MzE1ODQwOTk0MQ%3D%3D.2-ccb7-5&oh=00_AYA2BpicIv749hZtmkjo3vhM6HAZ_dA8PBKdx51sUbpR9Q&oe=66D4E19C&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "275368690578076",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/456239910_18437256640071034_4649721541945413784_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=hAggX3u1hDcQ7kNvgEc7BY8&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQyNjU1NTA3Njk1NDk3Ng%3D%3D.2-ccb7-5&oh=00_AYAZFPbqpeVJlvUk8PN9Ezs0qKCh7oSNESUwzklsCXqtmg&oe=66D4E06F&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "65383696796458760",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/456719635_18437251081071034_7578126234058713421_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEzODMuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=CYdXNTyIyXYQ7kNvgGFgbCj&_nc_gid=2301b91641e646fc9fe910a5e80d9537&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQwOTUxMTIyMDYxNzUxMg%3D%3D.2-ccb7-5&oh=00_AYAndCrCs5qlUvcGfVWr-ol0EZ7KGMZZjgeOYt0OZ41Cag&oe=66D4E5FA&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "7890789-94567984673",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/456546448_18437250220071034_5059660450331730802_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3ODkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=i1XRxQYqWa4Q7kNvgFJtNQ2&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzQ0MjQwNTUyMDA0NjY2MDg0MQ%3D%3D.2-ccb7-5&oh=00_AYAl6RLh3Etxv3imElmWt7cuT_KEyKCrTa32nbrWEfc2rQ&oe=66D4CFB7&_nc_sid=0b30b7",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
		];

		// const url = `https://graph.instagram.com/me/${instagramFeedMediaType}&access_token=${instagramUserToken}`;
		// // Catch Data Lifetime for 24 Hours
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
