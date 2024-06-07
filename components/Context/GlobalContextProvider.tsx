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
				caseStudies: globalProps?.caseStudies,
				testimonials: globalProps?.testimonials,
				jobsPositions: globalProps?.jobsPositions,
				themesOptionsContent: globalProps?.themesOptionsContent,
				boardOfDirectorsGrid: globalProps?.boardOfDirectorsGrid,
				executiveLeadershipsGrid: globalProps?.executiveLeadershipsGrid,

				// Football Fixtures
				lastThreeFixtures: globalProps?.lastThreeFixtures,

				// Website Links
				mobileLinks: globalProps?.mobileLinks,
				newsSublinks: globalProps?.newsSublinks,
				fansSublinks: globalProps?.fansSublinks,
				careerSublinks: globalProps?.careerSublinks,
				copyrightLinks: globalProps?.copyrightLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				communitySublinks: globalProps?.communitySublinks,
				ourHistorySublinks: globalProps?.ourHistorySublinks,
				megaNavigationLinks: globalProps?.megaNavigationLinks,
				aboutTheClubSublinks: globalProps?.aboutTheClubSublinks,
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
