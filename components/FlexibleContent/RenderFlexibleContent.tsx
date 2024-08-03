"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import Hero from "@/components/Hero";
import TitleParagraph from "@/components/TitleParagraph";
import LatestNewsGrid from "@/components/LatestNewsGrid";
import NewOfficialKitCta from "@/components/NewOfficialKitCta";
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures";

const RenderFlexibleContent: FC = () => {
	const pageContextContent = usePageContext();
	const FlexibleContent = pageContextContent?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_LatestNewsGrid`]: LatestNewsGrid,
		[`${FlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
		[`${FlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
	};

	return (
		<>
			{pageContextContent?.content?.length > 0 ? (
				pageContextContent?.content?.map((item: any, index: number) =>
					item?.displaySection ? (
						<section key={index}>
							{componentMapping[item?.fieldGroupName] && (
								<Fragment>
									{React.createElement(componentMapping[item?.fieldGroupName], {
										...item,
									})}
								</Fragment>
							)}
						</section>
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
