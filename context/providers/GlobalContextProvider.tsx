"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

// Components
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
// import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import PostHogContextProvider from "@/context/providers/PostHogProviderContext";

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
				// lastThreeFixtures: globalProps?.lastThreeFixtures,

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
			{/* <PageLoadingSquares /> */}
			{/* Cookie Policy Pop Up */}
			{/* <PostHogContextProvider /> */}
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				{children}
			</motion.div>
			{/* Vercel Analytics */}
			<Analytics />
			{/* Vercel Speed Insights */}
			<SpeedInsights />
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
