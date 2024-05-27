// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/pages";

// Components
import ErrorPage from "../Global/ErrorPage";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Maintenance`]: Maintenance,
		[`${FlexibleContent}_ErrorPageContent`]: ErrorPage,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
	};

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, index: number) =>
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
