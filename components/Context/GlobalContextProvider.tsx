// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				news: globalProps?.news,
				blogs: globalProps?.blogs,
				mobileLinks: globalProps?.mobileLinks,
				caseStudies: globalProps?.caseStudies,
				testimonials: globalProps?.testimonials,
				newsSublinks: globalProps?.newsSublinks,
				fansSublinks: globalProps?.fansSublinks,
				jobsPositions: globalProps?.jobsPositions,
				careerSublinks: globalProps?.careerSublinks,
				copyrightLinks: globalProps?.copyrightLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				communitySublinks: globalProps?.communitySublinks,
				ourHistorySublinks: globalProps?.ourHistorySublinks,
				megaNavigationLinks: globalProps?.megaNavigationLinks,
				aboutTheClubSublinks: globalProps?.aboutTheClubSublinks,
				themesOptionsContent: globalProps?.themesOptionsContent,
				boardOfDirectorsGrid: globalProps?.boardOfDirectorsGrid,
				executiveLeadershipsGrid: globalProps?.executiveLeadershipsGrid,
				megaNavigationUsefulSublinks: globalProps?.megaNavigationUsefulSublinks,
				benjaminMkapaStadiumSublinks: globalProps?.benjaminMkapaStadiumSublinks,
				partnershipsAdvertisingSublinks:
					globalProps?.partnershipsAdvertisingSublinks,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
