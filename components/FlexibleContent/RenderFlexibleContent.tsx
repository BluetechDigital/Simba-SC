"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import Hero from "@/components/Hero/index";
import HeroTwo from "@/components/Hero/HeroTwo";
import AboutSimba from "@/components/AboutSimba";
import HeroThree from "@/components/Hero/HeroThree";
import VisitStore from "@/components/VisitStore/index";
import SponsorsLogos from "@/components/SponsorsLogos";
import TitleParagraph from "@/components/TitleParagraph";
import LatestNewsGrid from "@/components/LatestNewsGrid";
import SocialMediaGrid from "@/components/SocialMediaGrid";
import NewsletterBanner from "@/components/NewsletterBanner";
import SimbaTVBanner from "@/components/SimbaTVBanner/index";
import NewOfficialKitCta from "@/components/NewOfficialKitCta";
import TrophyCabinetBanner from "@/components/TrophyCabinetBanner";
import ClubCardMembershipCTA from "@/components/ClubCardMembershipCta";
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures";
import OfficialMembershipsCta from "@/components/OfficialMembershipsCta";

const RenderFlexibleContent: FC = () => {
	const pageContextContent = usePageContext();
	const FlexibleContent = pageContextContent?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_HeroThree`]: HeroThree,
		[`${FlexibleContent}_AboutSimba`]: AboutSimba,
		[`${FlexibleContent}_VisitStore`]: VisitStore,
		[`${FlexibleContent}_SimbatvBanner`]: SimbaTVBanner,
		[`${FlexibleContent}_SponsorsLogos`]: SponsorsLogos,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_LatestNewsGrid`]: LatestNewsGrid,
		[`${FlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
		[`${FlexibleContent}_NewsletterBanner`]: NewsletterBanner,
		[`${FlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
		[`${FlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
		[`${FlexibleContent}_TrophyCabinetBanner`]: TrophyCabinetBanner,
		[`${FlexibleContent}_ClubCardMembershipCta`]: ClubCardMembershipCTA,
		[`${FlexibleContent}_OfficialMembershipsCta`]: OfficialMembershipsCta,
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
