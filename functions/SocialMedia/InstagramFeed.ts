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
					"https://scontent.cdninstagram.com/v/t39.30808-6/456188485_18436048153071034_1955292199529445709_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0MjEuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=VK-RQOYwPZQQ7kNvgFbU0_j&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzQzMTQzMzM4NTI2NjgyNA%3D%3D.2-ccb7-5&oh=00_AYBqfm7eEiSzgJB9EhStJIBRg4SeYQ63yp4gzlnTyNEbJw&oe=66CEDEC2&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "6835437698-6846969567956",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/455813907_18436057567071034_3504923441724248938_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=myKEZ7XagAcQ7kNvgGh5-P0&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzQ2MjgxOTU2MzQ2MjQ4OA%3D%3D.2-ccb7-5&oh=00_AYCl0OZSh_BYqah_ywmBw0xunhGSek6vPvRwCGgA6cnhZw&oe=66CEB67A&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "54735476547657458",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/455861532_18436046782071034_5914147549261150701_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Y_MDb29GIHgQ7kNvgG6XKRU&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzQyNzQ2NDA0NzA3NDQ5Nw%3D%3D.2-ccb7-5&oh=00_AYA6oCSGW4OHivW05LnbkVlae_cS5SBi9Dq4HEj_a70VPg&oe=66CED078&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "135467658458945678",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/455859966_18436039549071034_2938581241294155481_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=u1x0Uho8digQ7kNvgESjhb1&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzQwNTEyMzQzOTE2NTYzMQ%3D%3D.2-ccb7-5&oh=00_AYBSyd2nuKC3oHPutOo8gIMPfplA8nrAAOccaaFlABoQsw&oe=66CEBBA5&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "02653794679467576",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/456081669_18436037155071034_7675595547733942531_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0MjEuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=OJI_uJDR9ugQ7kNvgHhqlav&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzM5NzcyMDQzMzkwNzAxNA%3D%3D.2-ccb7-5&oh=00_AYC2rAtioS5eSojhOL2-gk1ijy8CtSBdrYe1Zd4m6lHc2Q&oe=66CED6AF&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "6584658965956797756",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/456481676_18436687864071034_4699713574902667896_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=mzYhpDkbtNEQ7kNvgHY3wOh&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ0MDEwNjQxODY5MjczMDQ3Mg%3D%3D.2-ccb7-5&oh=00_AYACKcYzqH0acXskYT_dlZT7K5NX5DwRTY_MD-bggFHyBQ&oe=66CED3E5&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "478976956907568067089",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/456022914_18436029055071034_1118217798185055706_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=j2k_scIDmz0Q7kNvgFqj8jp&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzM3MzYwMDQ1MTA1MjExOQ%3D%3D.2-ccb7-5&oh=00_AYBerads_PuUURXA4YGJEeyV2W3Y5TU5Bp2WubBUVBsHFA&oe=66CEB1DD&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "275368690578076",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/455938142_18436076776071034_7142731318773863020_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=djoBvI3DyKYQ7kNvgHi-y-H&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzUyMzc0OTUzODgwMjU3Mg%3D%3D.2-ccb7-5&oh=00_AYCSHZtyw6OEk8DXmtyo6i_3gbrCddyWe0WS3evzVSTMqg&oe=66CEB18B&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "65383696796458760",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/455963526_18436020973071034_6686453626386527945_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEzODMuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=jam0CV-SejwQ7kNvgGit7iO&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNzM0NTc1NzUwMzY1MzIzOQ%3D%3D.2-ccb7-5&oh=00_AYDdNhNOSShJ6iSC6P34dTOI7bB-4JjPv_RIjNWhg1UkVg&oe=66CEC964&_nc_sid=10d13b",
				username: "simbasctanzania",
				timestamp: "2024-06-16T20:25:43+0000",
				permalink: "https://www.instagram.com/p/zMDgwOC5kZWZ/",
				caption: " ",
			},
			{
				id: "7890789-94567984673",
				media_type: "CAROUSEL_ALBUM",
				media_url:
					"https://scontent.cdninstagram.com/v/t39.30808-6/456335584_18436393420071034_3867701347345602240_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Ewdm6IywEUIQ7kNvgFnZw1t&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzODg0NjI1MjIxMDQ4MDE5NA%3D%3D.2-ccb7-5&oh=00_AYBdfgslTZwR-ZcKcWsKGbCBFG6KPdnCJLX_ibYWOzOV-Q&oe=66CED601&_nc_sid=10d13b",
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
