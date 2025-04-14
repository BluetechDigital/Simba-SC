"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// CTA Components
import CTA from "@/components/CTA/CTA";
import CTATwo from "@/components/CTATwo/CTATwo";

// Hero Components
import Hero from "@/components/Hero/Hero";
import HeroTwo from "@/components/HeroTwo/HeroTwo";
import HeroFour from "@/components/HeroFour/HeroFour";
import HeroThree from "@/components/HeroThree/HeroThree";

// Fans Pages
import AllYoutubeVideos from "@/components/Fans/AllYouTubeVideos/AllYouTubeVideos";
import LatestVideoBlock from "@/components/Fans/LatestVideoBlock/LatestVideoBlock";
import AllPodcastsVideos from "@/components/Fans/AllPodcastsVideos/AllPodcastsVideos";

// Components: Fixtures
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures/LastThreeFixtures";

// Components: Club Partners
import ClubPartnersGrid from "@/components/ClubPartners/ClubPartnersGrid/ClubPartnersGrid";

// Other Components
import VisitStore from "@/components/VisitStore/VisitStore";
import VideoBlock from "@/components/VideoBlock/VideoBlock";
import AboutSimba from "@/components/AboutSimba/AboutSimba";
import ContactForm from "@/components/ContactForm/ContactForm";
import SimbaTVBanner from "@/components/SimbaTVBanner/SimbaTVBanner";
import SponsorsLogos from "@/components/SponsorsLogos/SponsorsLogos";
import LatestNewsGrid from "@/components/LatestNewsGrid/LatestNewsGrid";
import TitleParagraph from "@/components/TitleParagraph/TitleParagraph";
import SocialMediaGrid from "@/components/SocialMediaGrid/SocialMediaGrid";
import NewsletterBanner from "@/components/NewsletterBanner/NewsletterBanner";
import AboutTheClubGrid from "@/components/AboutTheClubGrid/AboutTheClubGrid";
import NewOfficialKitCta from "@/components/NewOfficialKitCta/NewOfficialKitCta";
import TitleContentImage from "@/components/TitleContentImage/TitleContentImage";
import GeneralInformation from "@/components/GeneralInformation/GeneralInformation";
import TrophyCabinetBanner from "@/components/TrophyCabinetBanner/TrophyCabinetBanner";
import ClubCardMembershipCTA from "@/components/ClubCardMembershipCTA/ClubCardMembershipCTA";
import OfficialMembershipsCta from "@/components/OfficialMembershipsCta/OfficialMembershipsCta";
import TitleParagraphDynamicColour from "@/components/TitleParagraphDynamicColour/TitleParagraphDynamicColour";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		// CTA Components
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,

		// Hero Components
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_HeroFour`]: HeroFour,
		[`${FlexibleContent}_HeroThree`]: HeroThree,

		// Other Components
		[`${FlexibleContent}_AboutSimba`]: AboutSimba,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_VisitStore`]: VisitStore,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_TitleParagraphDynamicColour`]:
			TitleParagraphDynamicColour,
		[`${FlexibleContent}_SimbatvBanner`]: SimbaTVBanner,
		[`${FlexibleContent}_SponsorsLogos`]: SponsorsLogos,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_LatestNewsGrid`]: LatestNewsGrid,
		[`${FlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
		[`${FlexibleContent}_ClubPartnersGrid`]: ClubPartnersGrid,
		[`${FlexibleContent}_AboutTheClubGrid`]: AboutTheClubGrid,
		[`${FlexibleContent}_NewsletterBanner`]: NewsletterBanner,
		[`${FlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
		[`${FlexibleContent}_GeneralInformation`]: GeneralInformation,
		[`${FlexibleContent}_TrophyCabinetBanner`]: TrophyCabinetBanner,
		[`${FlexibleContent}_ClubCardMembershipCta`]: ClubCardMembershipCTA,
		[`${FlexibleContent}_OfficialMembershipsCta`]: OfficialMembershipsCta,

		// Fans Pages
		[`${FlexibleContent}_AllYoutubeVideos`]: AllYoutubeVideos,
		[`${FlexibleContent}_LatestVideoBlock`]: LatestVideoBlock,
		[`${FlexibleContent}_AllPodcastsVideos`]: AllPodcastsVideos,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<Fragment key={index}>
						{item?.displaySection ? (
							<section>
								{componentMapping[item?.fieldGroupName] && (
									<>
										{React.createElement(componentMapping[item?.fieldGroupName], {
											...item,
										})}
									</>
								)}
							</section>
						) : (
							<></>
						)}
					</Fragment>
				))
			}
		</>
	);
};

export default RenderFlexibleContent;
