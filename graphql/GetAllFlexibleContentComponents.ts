// Imports
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
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroThree {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
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
											... on ${postTypeFlexibleContent}_AboutSimba {
												fieldGroupName
                  								displaySection
                  								title
                  								titleTwo
												paragraph
												paragraphTwo
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
											... on ${postTypeFlexibleContent}_AboutTheClubGrid {
												fieldGroupName
                  								displaySection
                  								aboutGrid {
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
											... on ${postTypeFlexibleContent}_GeneralInformation {
												fieldGroupName
                  								displaySection
												title
												paragraph
												informationGrid {
                  								  	title
													paragraph
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
											... on ${postTypeFlexibleContent}_OfficialMembershipsCta {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
                  								image {
                  									altText
                  									sourceUrl
                  									mediaDetails {
                  										height
                  										width
                  									}
                  								}
                  								buttonLink {
                  									url
                  									title
                  									target
                  								}
                  								bulletPoints {
                  								  	point {
                  								  		url
                  								  		title
                  								  		target
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_SponsorsLogos {
												fieldGroupName
												displaySection
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
											... on ${postTypeFlexibleContent}_ClubPartnersGrid {
												fieldGroupName
                  								displaySection
											}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												displaySection
												title
												video {
                  								  	link
                  								  	title
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
												subtitle
												paragraph
												displayVideo
												buttonLink {
													url
													title
													target
												}
												videoBackgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
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
											... on ${postTypeFlexibleContent}_TrophyCabinetBanner {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
												buttonLink {
                									url
                									title
                									target
                								}
												trophyCabinet {
                  									name
                  									totalAmount
                  									image {
                  										altText
                  										sourceUrl
                  										mediaDetails {
                  											height
                  											width
                  										}
                  									}
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
											... on ${postTypeFlexibleContent}_ClubCardMembershipCta {
												fieldGroupName
                  								displaySection
                  								title
                  								displayVideo
												buttonLink {
                									url
                									title
                									target
                								}
												video {
                  								  	link
                  								  	title
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
												clubCardMembershipText
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
												buttonLink {
                									url
                									title
                									target
                								}
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
												backgroundImage {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
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
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												formTitle
												paragraph
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

/* CLUB PARTNERS */
/* Fetch all Club Partners Flexible Content Components 
(For every flexible content page) */
export const getAllClubPartnersFlexibleContentComponents = async (
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
							partnersContent {
								flexibleContent {
									... on ${postTypeFlexibleContent}_TitleContentImage {
										fieldGroupName
										displaySection
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
									... on ${postTypeFlexibleContent}_ImageSlider {
										fieldGroupName
										displaySection
										imageSlider {
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
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.partnersContent
					?.flexibleContent,
		};
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all club partners flexible content components"
		);
	}
};
