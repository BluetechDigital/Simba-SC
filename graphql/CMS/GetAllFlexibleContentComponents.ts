// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Components: ACF Flexible Content Post Types
import { CTA } from "@/components/CMS/CTA/graphql/index";
import { Hero } from "@/components/CMS/Hero/graphql/index";
import { CTATwo } from "@/components/CMS/CTATwo/graphql/index";
import { HeroTwo } from "@/components/CMS/HeroTwo/graphql/index";
import { HeroFour } from "@/components/CMS/HeroFour/graphql/index";
import { HeroThree } from "@/components/CMS/HeroThree/graphql/index";
import { VideoBlock } from "@/components/CMS/VideoBlock/graphql/index";
import { AboutSimba } from "@/components/CMS/AboutSimba/graphql/index";
import { VisitStore } from "@/components/CMS/VisitStore/graphql/index";
import { ContactForm } from "@/components/CMS/ContactForm/graphql/index";
import { SimbaTVBanner } from "@/components/CMS/SimbaTVBanner/graphql/index";
import { SponsorsLogos } from "@/components/CMS/SponsorsLogos/graphql/index";
import { LatestNewsGrid } from "@/components/CMS/LatestNewsGrid/graphql/index";
import { TitleParagraph } from "@/components/CMS/TitleParagraph/graphql/index";
import { SocialMediaGrid } from "@/components/CMS/SocialMediaGrid/graphql/index";
import { AboutTheClubGrid } from "@/components/CMS/AboutTheClubGrid/graphql/index";
import { NewsletterBanner } from "@/components/CMS/NewsletterBanner/graphql/index";
import { NewOfficialKitCta } from "@/components/CMS/NewOfficialKitCta/graphql/index";
import { TitleContentImage } from "@/components/CMS/TitleContentImage/graphql/index";
import { GeneralInformation } from "@/components/CMS/GeneralInformation/graphql/index";
import { TrophyCabinetBanner } from "@/components/CMS/TrophyCabinetBanner/graphql/index";
import { ClubCardMembershipCTA } from "@/components/CMS/ClubCardMembershipCTA/graphql/index";
import { OfficialMembershipsCta } from "@/components/CMS/OfficialMembershipsCta/graphql/index";
import { TitleParagraphDynamicColour } from "@/components/CMS/TitleParagraphDynamicColour/graphql/index";

// Components: Fixtures
import { LastThreeFixtures } from "@/components/CMS/Fixtures/LastThreeFixtures/graphql/index";

// Components: Fans
import { LatestVideoBlock } from "@/components/CMS/Fans/LatestVideoBlock/graphql/index";
import { AllYouTubeVideos } from "@/components/CMS/Fans/AllYouTubeVideos/graphql/index";
import { AllPodcastsVideos } from "@/components/CMS/Fans/AllPodcastsVideos/graphql/index";

// Components: Club Partners Flexible Content Post Types
import { ImageSlider } from "@/components/CMS/ClubPartners/ImageSlider/graphql/index";
import { ClubPartnersGrid } from "@/components/CMS/ClubPartners/ClubPartnersGrid/graphql/index";
import { ClubPartnersTitleContentImage } from "@/components/CMS/ClubPartners/TitleContentImage/graphql/index";

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
