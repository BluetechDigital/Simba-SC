// Imports
import {client} from "@/config/apollo";
import {ISlug} from "@/types/context";
import {DocumentNode, gql} from "@apollo/client";
import {IClubPartnersPostType} from "@/types/components/ClubPartners";

/* CLUB PARTNERS */
// Club Partners Content
export const getAllClubPartnersSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				clubPartnersSlugs: clubPartners(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.clubPartnersSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch club partners slugs");
	}
};

// Content Except
export const getAllClubPartnersExcerpt =
	async (): Promise<IClubPartnersPostType.IClubPartnersExcept> => {
		try {
			const content: DocumentNode = gql`
				{
					clubPartnersContent: clubPartners(
						where: {status: PUBLISH, orderby: {field: DATE, order: ASC}}
						first: 100
					) {
						edges {
							node {
								slug
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

			return response?.data?.clubPartnersContent?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch club partners content"
			);
		}
	};

/* Dynamic ACF Components specifically
 for the Club Partners Custom Post Type */
export const getAllClubPartnersContent = async (
	slug: string
): Promise<IClubPartnersPostType.IClubPartnersContent[`partnersContent`]> => {
	try {
		const content: DocumentNode = gql`
			{
				clubPartnersContent: clubPartners(
					where: {
						name: "${slug}"
						status: PUBLISH
					}
					first: 100
				) {
					edges {
    					node {
    						partnersContent {
    							titleContentImage {
    								title
									paragraph
									buttonLink {
										url
										title
										target
									}
									image {
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
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.clubPartnersContent?.edges[0]?.node?.partnersContent;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch club partners content"
		);
	}
};
