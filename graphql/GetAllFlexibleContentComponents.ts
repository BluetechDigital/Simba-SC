// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Components: ACF Flexible Content Post Types
import { CTA } from "@/components/CTA/graphql/index";
import { Hero } from "@/components/Hero/graphql/index";
import { CTATwo } from "@/components/CTATwo/graphql/index";
import { HeroTwo } from "@/components/HeroTwo/graphql/index";
import { HeroFour } from "@/components/HeroFour/graphql/index";
import { HeroThree } from "@/components/HeroThree/graphql/index";
import { VideoBlock } from "@/components/VideoBlock/graphql/index";
import { AboutSimba } from "@/components/AboutSimba/graphql/index";
import { VisitStore } from "@/components/VisitStore/graphql/index";
import { ContactForm } from "@/components/ContactForm/graphql/index";
import { SimbaTVBanner } from "@/components/SimbaTVBanner/graphql/index";
import { SponsorsLogos } from "@/components/SponsorsLogos/graphql/index";
import { LatestNewsGrid } from "@/components/LatestNewsGrid/graphql/index";
import { TitleParagraph } from "@/components/TitleParagraph/graphql/index";
import { SocialMediaGrid } from "@/components/SocialMediaGrid/graphql/index";
import { AboutTheClubGrid } from "@/components/AboutTheClubGrid/graphql/index";
import { NewsletterBanner } from "@/components/NewsletterBanner/graphql/index";
import { NewOfficialKitCta } from "@/components/NewOfficialKitCta/graphql/index";
import { TitleContentImage } from "@/components/TitleContentImage/graphql/index";
import { GeneralInformation } from "@/components/GeneralInformation/graphql/index";
import { TrophyCabinetBanner } from "@/components/TrophyCabinetBanner/graphql/index";
import { ClubCardMembershipCTA } from "@/components/ClubCardMembershipCTA/graphql/index";
import { OfficialMembershipsCta } from "@/components/OfficialMembershipsCta/graphql/index";
import { TitleParagraphDynamicColour } from "@/components/TitleParagraphDynamicColour/graphql/index";

// Components: Fixtures
import { LastThreeFixtures } from "@/components/Fixtures/LastThreeFixtures/graphql/index";

// Components: Fans
import { LatestVideoBlock } from "@/components/Fans/LatestVideoBlock/graphql/index";
import { AllYouTubeVideos } from "@/components/Fans/AllYouTubeVideos/graphql/index";
import { AllPodcastsVideos } from "@/components/Fans/AllPodcastsVideos/graphql/index";

// Components: Club Partners Flexible Content Post Types
import { ImageSlider } from "@/components/ClubPartners/ImageSlider/graphql/index";
import { ClubPartnersGrid } from "@/components/ClubPartners/ClubPartnersGrid/graphql/index";
import { ClubPartnersTitleContentImage } from "@/components/ClubPartners/TitleContentImage/graphql/index";

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
											... on ${postTypeFlexibleContent}_Cta {${CTA}}
											... on ${postTypeFlexibleContent}_Hero {${Hero}}
											... on ${postTypeFlexibleContent}_CtaTwo {${CTATwo}}
											... on ${postTypeFlexibleContent}_HeroTwo {${HeroTwo}}
											... on ${postTypeFlexibleContent}_HeroFour {${HeroFour}}
											... on ${postTypeFlexibleContent}_HeroThree {${HeroThree}}
											... on ${postTypeFlexibleContent}_AboutSimba {${AboutSimba}}
											... on ${postTypeFlexibleContent}_VideoBlock {${VideoBlock}}
											... on ${postTypeFlexibleContent}_VisitStore {${VisitStore}}
											... on ${postTypeFlexibleContent}_ContactForm {${ContactForm}}
											... on ${postTypeFlexibleContent}_SponsorsLogos {${SponsorsLogos}}
											... on ${postTypeFlexibleContent}_SimbatvBanner {${SimbaTVBanner}}
											... on ${postTypeFlexibleContent}_TitleParagraph {${TitleParagraph}}
											... on ${postTypeFlexibleContent}_LatestNewsGrid {${LatestNewsGrid}}
											... on ${postTypeFlexibleContent}_SocialMediaGrid {${SocialMediaGrid}}
											... on ${postTypeFlexibleContent}_AboutTheClubGrid {${AboutTheClubGrid}}
											... on ${postTypeFlexibleContent}_ClubPartnersGrid {${ClubPartnersGrid}}
											... on ${postTypeFlexibleContent}_LatestVideoBlock {${LatestVideoBlock}}
											... on ${postTypeFlexibleContent}_AllYoutubeVideos {${AllYouTubeVideos}}
											... on ${postTypeFlexibleContent}_NewsletterBanner {${NewsletterBanner}}
											... on ${postTypeFlexibleContent}_AllPodcastsVideos {${AllPodcastsVideos}}
											... on ${postTypeFlexibleContent}_TitleContentImage {${TitleContentImage}}
											... on ${postTypeFlexibleContent}_LastThreeFixtures {${LastThreeFixtures}}
											... on ${postTypeFlexibleContent}_NewOfficialKitCta {${NewOfficialKitCta}}
											... on ${postTypeFlexibleContent}_GeneralInformation {${GeneralInformation}}
											... on ${postTypeFlexibleContent}_TrophyCabinetBanner {${TrophyCabinetBanner}}
											... on ${postTypeFlexibleContent}_ClubCardMembershipCta {${ClubCardMembershipCTA}}
											... on ${postTypeFlexibleContent}_OfficialMembershipsCta {${OfficialMembershipsCta}}
											... on ${postTypeFlexibleContent}_TitleParagraphDynamicColour {${TitleParagraphDynamicColour}}
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
									... on ${postTypeFlexibleContent}_ImageSlider {${ImageSlider}}
									... on ${postTypeFlexibleContent}_TitleContentImage {${ClubPartnersTitleContentImage}}
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
