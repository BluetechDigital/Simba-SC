"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import Hero from "@/components/Hero";
import VisitStore from "@/components/VisitStore";
import SimbaTVBanner from "@/components/SimbaTVBanner";
import SponsorsLogos from "@/components/SponsorsLogos";
import TitleParagraph from "@/components/TitleParagraph";
import LatestNewsGrid from "@/components/LatestNewsGrid";
import SocialMediaGrid from "@/components/SocialMediaGrid";
import NewsletterBanner from "@/components/NewsletterBanner";
import NewOfficialKitCta from "@/components/NewOfficialKitCta";
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures";

const RenderFlexibleContent: FC = () => {
	const pageContextContent = usePageContext();
	const FlexibleContent = pageContextContent?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_VisitStore`]: VisitStore,
		[`${FlexibleContent}_SimbatvBanner`]: SimbaTVBanner,
		[`${FlexibleContent}_SponsorsLogos`]: SponsorsLogos,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_LatestNewsGrid`]: LatestNewsGrid,
		[`${FlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
		[`${FlexibleContent}_NewsletterBanner`]: NewsletterBanner,
		[`${FlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
		[`${FlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
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
