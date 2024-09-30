"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import Hero from "@/components/Hero/index";
import HeroTwo from "@/components/Hero/HeroTwo";
import HeroThree from "@/components/Hero/HeroThree";
import AboutSimba from "@/components/AboutSimba/index";
import VisitStore from "@/components/VisitStore/index";
import SponsorsLogos from "@/components/SponsorsLogos";
import TitleParagraph from "@/components/TitleParagraph";
import LatestNewsGrid from "@/components/LatestNewsGrid";
import SocialMediaGrid from "@/components/SocialMediaGrid";
import NewsletterBanner from "@/components/NewsletterBanner";
import SimbaTVBanner from "@/components/SimbaTVBanner/index";
import NewOfficialKitCta from "@/components/NewOfficialKitCta";
import GeneralInformation from "@/components/GeneralInformation";
import TrophyCabinetBanner from "@/components/TrophyCabinetBanner";
import ClubCardMembershipCTA from "@/components/ClubCardMembershipCta";
import AboutTheClubGrid from "@/components/AboutSimba/AboutTheClubGrid";
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures";
import OfficialMembershipsCta from "@/components/OfficialMembershipsCta";
import ClubPartnersGrid from "@/components/ClubPartners/ClubPartnersGrid";

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
		[`${FlexibleContent}_AboutTheClubGrid`]: AboutTheClubGrid,
		[`${FlexibleContent}_NewsletterBanner`]: NewsletterBanner,
		[`${FlexibleContent}_ClubPartnersGrid`]: ClubPartnersGrid,
		[`${FlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
		[`${FlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
		[`${FlexibleContent}_GeneralInformation`]: GeneralInformation,
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
