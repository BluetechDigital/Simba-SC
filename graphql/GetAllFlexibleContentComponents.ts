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
												... on ${postTypeFlexibleContent}_SponsorsLogos {
												fieldGroupName
												displaySection
												title
												logoGrid {
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
											... on ${postTypeFlexibleContent}_VisitStore {
												fieldGroupName
												displaySection
												title
												buttonLink {
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
											... on ${postTypeFlexibleContent}_NewsletterBanner {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
                  								buttonLink {
                  								  	url
                  								  	title
                  								  	target
                  								}
											}
											... on ${postTypeFlexibleContent}_SimbatvBanner {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
                  								youtubeButton {
                  								  	url
                  								  	title
                  								  	target
                  								}
												podcastsButton {
                  								  	url
                  								  	title
                  								  	target
                  								}
												fansButton {
                  								  	url
                  								  	title
                  								  	target
                  								}
											}
											... on ${postTypeFlexibleContent}_SocialMediaGrid {
												fieldGroupName
												displaySection
												title
											}
											... on ${postTypeFlexibleContent}_LastThreeFixtures {
												fieldGroupName
												displaySection
												title
											}
											... on ${postTypeFlexibleContent}_NewOfficialKitCta {
												fieldGroupName
                  								displaySection
                  								title
												ctaTitle
                  								link {
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
												imageTwo {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
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
