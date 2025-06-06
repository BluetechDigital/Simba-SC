"use client";

// Imports
import React, { FC, memo, useMemo, Fragment} from "react";
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

const RenderFlexibleContent: FC = memo(() => {
	const { memoizedValues } = usePageContext();
	
	// Destructure for clarity
	const content = memoizedValues?.content;
	const postTypeFlexibleContent = memoizedValues?.postTypeFlexibleContent;

	// Memoize the Components Key Value Pairs
	const componentMapping = useMemo(() => {
        const mapping: { [key: string]: React.ComponentType<any> } = {
			// CTA Components
			[`${postTypeFlexibleContent}_Cta`]: CTA,
			[`${postTypeFlexibleContent}_CtaTwo`]: CTATwo,

			// Hero Components
			[`${postTypeFlexibleContent}_Hero`]: Hero,
			[`${postTypeFlexibleContent}_HeroTwo`]: HeroTwo,
			[`${postTypeFlexibleContent}_HeroFour`]: HeroFour,
			[`${postTypeFlexibleContent}_HeroThree`]: HeroThree,

			// Other Components
			[`${postTypeFlexibleContent}_AboutSimba`]: AboutSimba,
			[`${postTypeFlexibleContent}_VideoBlock`]: VideoBlock,
			[`${postTypeFlexibleContent}_VisitStore`]: VisitStore,
			[`${postTypeFlexibleContent}_ContactForm`]: ContactForm,
			[`${postTypeFlexibleContent}_TitleParagraphDynamicColour`]:
			TitleParagraphDynamicColour,
			[`${postTypeFlexibleContent}_SimbatvBanner`]: SimbaTVBanner,
			[`${postTypeFlexibleContent}_SponsorsLogos`]: SponsorsLogos,
			[`${postTypeFlexibleContent}_TitleParagraph`]: TitleParagraph,
			[`${postTypeFlexibleContent}_LatestNewsGrid`]: LatestNewsGrid,
			[`${postTypeFlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
			[`${postTypeFlexibleContent}_ClubPartnersGrid`]: ClubPartnersGrid,
			[`${postTypeFlexibleContent}_AboutTheClubGrid`]: AboutTheClubGrid,
			[`${postTypeFlexibleContent}_NewsletterBanner`]: NewsletterBanner,
			[`${postTypeFlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
			[`${postTypeFlexibleContent}_TitleContentImage`]: TitleContentImage,
			[`${postTypeFlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
			[`${postTypeFlexibleContent}_GeneralInformation`]: GeneralInformation,
			[`${postTypeFlexibleContent}_TrophyCabinetBanner`]: TrophyCabinetBanner,
			[`${postTypeFlexibleContent}_ClubCardMembershipCta`]: ClubCardMembershipCTA,
			[`${postTypeFlexibleContent}_OfficialMembershipsCta`]: OfficialMembershipsCta,

			// Fans Pages
			[`${postTypeFlexibleContent}_AllYoutubeVideos`]: AllYoutubeVideos,
			[`${postTypeFlexibleContent}_LatestVideoBlock`]: LatestVideoBlock,
			[`${postTypeFlexibleContent}_AllPodcastsVideos`]: AllPodcastsVideos,
        };
        return mapping;
    }, [postTypeFlexibleContent]); // Recreate mapping only if postTypeFlexibleContent changes

	return (
		<>
			{content?.map((item: any, index: number) => (
				<Fragment key={item?.id || item?.fieldGroupName + index}>
					{item?.displaySection === true ? (
						<section>
							{componentMapping[item?.fieldGroupName] && (
								<>
									{React.createElement(componentMapping[item?.fieldGroupName], {
										...item,
									})}
								</>
							)}
						</section>
					) : (null )}
				</Fragment>
			))}
        </>
	);
});

export default RenderFlexibleContent;
