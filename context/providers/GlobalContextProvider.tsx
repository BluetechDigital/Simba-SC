"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {GlobalContext} from "@/context/global";
import {IGlobal} from "@/context/types/context";

// Components
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
// import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import PostHogContextProvider from "@/context/providers/PostHogProviderContext";

const GlobalContextProvider: FC<IGlobal.IContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				testimonials: globalProps?.testimonials,
				jobsPositions: globalProps?.jobsPositions,
				themesOptionsContent: globalProps?.themesOptionsContent,

				// News, Blogs & Case Studies
				news: globalProps?.news,
				blogs: globalProps?.blogs,
				caseStudies: globalProps?.caseStudies,

				// Club Partners
				clubPartners: globalProps?.clubPartners,

				// Social Media
				instagramFeed: globalProps?.instagramFeed,

				// Youtube Channel Info
				youtubeVideos: globalProps?.youtubeVideos,
				youtubeChannelInfo: globalProps?.youtubeChannelInfo,

				// Football Fixtures
				lastThreeFixtures: globalProps?.lastThreeFixtures,

				// Shopify Online Store
				onlineStoreShirts: globalProps?.onlineStoreShirts,

				// Website Links
				mobileLinks: globalProps?.mobileLinks,
				careerSublinks: globalProps?.careerSublinks,
				copyrightLinks: globalProps?.copyrightLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,

				// Stakeholders
				boardOfDirectorsGrid: globalProps?.boardOfDirectorsGrid,
				executiveLeadershipsGrid: globalProps?.executiveLeadershipsGrid,

				// Mega Menu Links
				newsSublinks: globalProps?.newsSublinks,
				fansSublinks: globalProps?.fansSublinks,
				communitySublinks: globalProps?.communitySublinks,
				ourHistorySublinks: globalProps?.ourHistorySublinks,
				megaNavigationLinks: globalProps?.megaNavigationLinks,
				aboutTheClubSublinks: globalProps?.aboutTheClubSublinks,
				benjaminMkapaStadiumSublinks: globalProps?.benjaminMkapaStadiumSublinks,
				megaNavigationUsefulSublinks: globalProps?.megaNavigationUsefulSublinks,
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
