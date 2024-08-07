import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";
import {IThemesOptionsContent} from "@/types/context";

/* THEMES OPTIONS CONTENT
 The ID number refers to the
"Global Content" page ID*/
export const getThemesOptionsContent =
	async (): Promise<IThemesOptionsContent> => {
		try {
			const content: DocumentNode = gql`
				{
					themeOptions(where: {name: "Global Content", status: PUBLISH}) {
						edges {
							node {
								themeOptions {
									email
									address
									emailTwo
									phoneNumber
									copyrightText
									phoneNumberTwo
									displayNoticeBanner
									noticeBannerTextarea
									facebookLink {
										url
										title
										target
									}
									twitterLink {
										url
										title
										target
									}
									linkedinLink {
										url
										title
										target
									}
									instagramLink {
										url
										title
										target
									}
									tiktokLink {
										url
										title
										target
									}
									youtubeLink {
										url
										title
										target
									}
									newsletter {
										title
										paragraph
										mainTitle
										bottomTextarea
										icon {
											altText
											sourceUrl
											mediaDetails {
												height
												width
											}
										}
									}
									megaNavigation {
										fansVideoElement
										displayFansVideoElement
									}
									topNavigation {
										foundationPageLink {
											url
											title
											target
										}
										sponsorsIcons {
											altText
											sourceUrl
											mediaDetails {
												height
												width
											}
										}
									}
									errorPageContent {
										displaySection
										title
										paragraph
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
								}
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.themeOptions?.edges[0]?.node?.themeOptions;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch themes options content"
			);
		}
	};
