import {ISlug} from "@/types/context";
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES SLUGS (URLS) */
export const getAllPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch all pages urls");
	}
};

/* NEWS PAGES SLUGS (URLS) */
export const getAllNewsPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(
					where: {status: PUBLISH, parentNotIn: "news"}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch all news pages urls");
	}
};

/* OUR HISTORY PAGES SLUGS (URLS) */
export const getAllOurHistoryPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(
					where: {status: PUBLISH, parentNotIn: "our-history"}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all our history pages urls"
		);
	}
};

/* ABOUT THE CLUB PAGES SLUGS (URLS) */
export const getAllAboutTheClubPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(
					where: {status: PUBLISH, parentNotIn: "about-the-club"}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all about the club pages urls"
		);
	}
};

/* FANS PAGES SLUGS (URLS) */
export const getAllFansPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(
					where: {status: PUBLISH, parentNotIn: "fans"}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch all fans pages urls");
	}
};

/* COMMUNITY PAGES SLUGS (URLS) */
export const getAllCommunityPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(
					where: {status: PUBLISH, parentNotIn: "community"}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all community pages urls"
		);
	}
};

/* PARTNERSHIPS ADVERTISING PAGES SLUGS (URLS) */
export const getAllPartnershipsAdvertisingPagesSlugs =
	async (): Promise<ISlug> => {
		try {
			const content: DocumentNode = gql`
				{
					pageURLs: pages(
						where: {status: PUBLISH, parentNotIn: "partnerships-advertising"}
						last: 100
					) {
						nodes {
							slug
							modified
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.pageURLs?.nodes;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch all partnerships advertising pages urls"
			);
		}
	};

/* STADIUM PAGES SLUGS (URLS) */
export const getAllStadiumPagesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(
					where: {status: PUBLISH, parentNotIn: "benjamin-mkapa-stadium"}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all benjamin mkapa stadium pages urls"
		);
	}
};
