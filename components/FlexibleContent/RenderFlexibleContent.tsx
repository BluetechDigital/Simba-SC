// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/pages";

// Components
// import Example from "../Example";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		// [`${FlexibleContent}_Example`]: Example,
	};

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMapping[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMapping[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
