"use client";

// Imports
import React, { FC, memo, useMemo, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import ImageSlider from "@/components/ClubPartners/ImageSlider/ImageSlider";
import TitleContentImage from "@/components/ClubPartners/TitleContentImage/TitleContentImage";

const RenderClubPartnersFlexibleContent: FC = memo(() => {
	const { memoizedValues } = usePageContext();
	
	// Destructure for clarity
	const content = memoizedValues?.content;
	const postTypeFlexibleContent = memoizedValues?.postTypeFlexibleContent;

	// Memoize the Components Key Value Pairs
	const componentMapping = useMemo(() => {
        const mapping: { [key: string]: React.ComponentType<any> } = {
			[`${postTypeFlexibleContent}_ImageSlider`]: ImageSlider,
			[`${postTypeFlexibleContent}_TitleContentImage`]: TitleContentImage,
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

export default RenderClubPartnersFlexibleContent;
