"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import TitleContentImage from "@/components/ClubPartners/TitleContentImage";

const RenderClubPartnersFlexibleContent: FC = () => {
	const pageContextContent = usePageContext();
	const FlexibleContent = pageContextContent?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
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

export default RenderClubPartnersFlexibleContent;
