"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// CTA Components
import CTA from "@/components/CTA/Index";
import CTATwo from "@/components/CTA/CTATwo";

// Hero Components
import Hero from "@/components/Hero/index";
import HeroTwo from "@/components/Hero/HeroTwo";
import HeroFour from "@/components/Hero/HeroFour";
import HeroThree from "@/components/Hero/HeroThree";

// Fans Pages
import AllYoutubeVideos from "@/components/Fans/AllYouTubeVideos/index";
import LatestVideoBlock from "@/components/Fans/LatestVideoBlock/index";
import AllPodcastsVideos from "@/components/Fans/AllPodcastsVideos/index";

// Other Components
import VideoBlock from "@/components/VideoBlock/index";
import AboutSimba from "@/components/AboutSimba/index";
import VisitStore from "@/components/VisitStore/index";
import SponsorsLogos from "@/components/SponsorsLogos";
import ContactForm from "@/components/ContactForm/index";
import TitleParagraph from "@/components/TitleParagraph";
import LatestNewsGrid from "@/components/LatestNews/index";
import SocialMediaGrid from "@/components/SocialMediaGrid";
import NewsletterBanner from "@/components/NewsletterBanner";
import SimbaTVBanner from "@/components/SimbaTVBanner/index";
import NewOfficialKitCta from "@/components/NewOfficialKitCta";
import GeneralInformation from "@/components/GeneralInformation";
import TrophyCabinetBanner from "@/components/TrophyCabinetBanner";
import TitleContentImage from "@/components/TitleContentImage/Index";
import ClubCardMembershipCTA from "@/components/ClubCardMembershipCta";
import AboutTheClubGrid from "@/components/AboutSimba/AboutTheClubGrid";
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures";
import OfficialMembershipsCta from "@/components/OfficialMembershipsCta";
import ClubPartnersGrid from "@/components/ClubPartners/ClubPartnersGrid";
import TitleParagraphDynamicColour from "@/components/TitleParagraphDynamicColour";

const RenderFlexibleContent: FC = () => {
	const pageContextContent = usePageContext();
	const FlexibleContent = pageContextContent?.postTypeFlexibleContent;

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
			{pageContextContent?.content?.length > 0 ? (
				pageContextContent?.content?.map((item: any, index: number) =>
					item?.displaySection ? (
						<Fragment key={index}>
							{componentMapping[item?.fieldGroupName] && (
								<>
									{React.createElement(componentMapping[item?.fieldGroupName], {
										...item,
									})}
								</>
							)}
						</Fragment>
					) : (
						<></>
					)
				)
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
