import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
): Promise<any> => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												displaySection
												heroSlider {
              										title
              										paragraph
													buttonLink {
                										url
                										title
                										target
                									}
                									buttonLinkTwo {
                										url
                										title
                										target
                									}
              										backgroundImage {
              											altText
              											sourceUrl
              											mediaDetails {
              												height
              												width
              											}
              										}
													
              									}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												displaySection
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_LastThreeFixtures {
												fieldGroupName
												displaySection
											}
											... on ${postTypeFlexibleContent}_LatestNewsGrid {
												fieldGroupName
                  								displaySection
                  								title
                  								ctaLink {
                  								  	url
                  								  	title
                  								  	target
                  								}
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
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};
