// Imports
import {IOnlineStore} from "@/types/api/Store";

// SHOPIFY ONLINE STORE
// Database Query
export const getAllOnlineStoreShirts =
	async (): Promise<IOnlineStore.IOnlineStoreShirts> => {
		// Test Data
		const testData = [
			{
				id: 4,
				slug: "mens-home-shirt-2024-2025",
				price: "34.99",
				title: "Mens Home Shirt - 2024/2025",
				currency: "USD",
				image: {
					altText: "Mens Home Shirt 2024/2025",
					sourceUrl:
						"https://vzt.nmy.mybluehost.me/website_4da9e86f/wp-content/uploads/2024/08/452679000_18431513491071034_8536101901661498156_n.jpg",
					mediaDetails: {
						width: 500,
						height: 500,
					},
				},
			},
			{
				id: 5,
				slug: "womens-home-shirt-2024-2025",
				price: "34.99",
				title: "Women's Home Shirt - 2024/2025",
				currency: "USD",
				image: {
					altText: "Women's Home Shirt 2024/2025",
					sourceUrl:
						"https://vzt.nmy.mybluehost.me/website_4da9e86f/wp-content/uploads/2024/08/452655823_18431513503071034_5957775309524608508_n.jpg",
					mediaDetails: {
						width: 500,
						height: 500,
					},
				},
			},
			{
				id: 6,
				slug: "mens-away-shirt-2024-2025",
				price: "34.99",
				title: "Mens Away Shirt - 2024/2025",
				currency: "USD",
				image: {
					altText: "Mens Away Shirt 2024/2025",
					sourceUrl:
						"https://vzt.nmy.mybluehost.me/website_4da9e86f/wp-content/uploads/2024/08/452679000_18431513491071034_8536101901661498156_n.jpg",
					mediaDetails: {
						width: 500,
						height: 500,
					},
				},
			},
			{
				id: 7,
				slug: "womens-away-shirt-2024-2025",
				price: "34.99",
				title: "Women's Away Shirt - 2024/2025",
				currency: "USD",
				image: {
					altText: "Women's Away Shirt 2024/2025",
					sourceUrl:
						"https://vzt.nmy.mybluehost.me/website_4da9e86f/wp-content/uploads/2024/08/452655823_18431513503071034_5957775309524608508_n.jpg",
					mediaDetails: {
						width: 500,
						height: 500,
					},
				},
			},
		];

		const url = ``;
		const options: any = {
			method: "GET",
			next: {revalidate: 86400}, // 24 hours in seconds
		};

		// Fetch new data from the API
		try {
			// const response = await fetch(url, options);
			// if (!response.ok) {
			// 	throw new Error(`HTTP error! status: ${response.status}`);
			// }
			// const storeShirts = await response.json();
			// return storeShirts;
		} catch (error: unknown) {
			console.error(error);
		}

		return testData;
	};
