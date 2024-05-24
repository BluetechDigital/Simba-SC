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
