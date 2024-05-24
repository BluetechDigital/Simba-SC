import {ISlug} from "@/types/context";
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* NEWS SLUGS (URLS) */
export const getAllNewsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				newsSlugs: news(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.newsSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the news slugs");
	}
};

// All News Content
export const getAllNewsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				newsContent: news(where: {status: PUBLISH}, last: 100) {
					edges {
						node {
							id
							slug
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.newsContent?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch all the news posts");
	}
};
