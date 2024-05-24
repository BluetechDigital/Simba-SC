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
				instagramFeed: globalProps?.instagramFeed,
				jobsPositions: globalProps?.jobsPositions,
				careerSublinks: globalProps?.careerSublinks,
				copyrightLinks: globalProps?.copyrightLinks,
				managementsJobs: globalProps?.managementsJobs,
				footerMenuLinks: globalProps?.footerMenuLinks,
				aboutUsSublinks: globalProps?.aboutUsSublinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				operationsTeamsJobs: globalProps?.operationsTeamsJobs,
				themesOptionsContent: globalProps?.themesOptionsContent,
				boardOfDirectorsGrid: globalProps?.boardOfDirectorsGrid,
				executiveLeadershipsGrid: globalProps?.executiveLeadershipsGrid,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
