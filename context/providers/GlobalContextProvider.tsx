"use client";

// Imports
import { FC } from "react";
import {motion} from "framer-motion";
import {GlobalContext} from "@/context/global";
import {IGlobal} from "@/context/types/context";

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
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				{children}
			</motion.div>
		</GlobalContext.Provider>
	);
};

GlobalContextProvider.displayName = 'GlobalContextProvider';

export default GlobalContextProvider;
