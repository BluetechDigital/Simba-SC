// Imports
import type {AppProps} from "next/app";
import { defaultSort } from "@/lib/Constants/constants";

// Styling
import "@/styles/globals.scss";

// Global Context Provider
import {IGlobal, IShopifyCollection} from "@/context/types/context";

// GraphQL Query Functions - Grouped for cleaner imports
import { 
	getAllMobileLinks,
	getAllFansSublinks,
	getAllNewsSublinks,
	getAllCopyrightLinks,
	getAllCareerSublinks,
	getAllNavbarMenuLinks,
	getAllFooterMenuLinks,
	getAllCommunitySublinks,
	getAllOurHistorySublinks,
	getAllMegaNavigationLinks,
	getAllAboutTheClubSublinks,
	getAllMegaNavigationUsefulSublinks,
	getAllBenjaminMkapaStadiumSublinks,
	getAllPartnershipsAdvertisingSublinks,
} from "@/graphql/CMS/GetAllMenuLinks";

import {getThemesOptionsContent} from "@/graphql/CMS/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/graphql/CMS/GetAllTestimonials";
import {getAllJobsPositionsContent} from "@/graphql/CMS/GetAllJobsPositions";

// Shopify GraphQL Query Functions
import { getAllShopifyCollectionSearchPageGridView } from "@/graphql/Shopify/queries/GetAllShopifyCollections";

// API Call for Instagram Feed
import {getAllInstagramFeedContent} from "@/api/SocialMedia/InstagramFeed";

// Youtube Channel Info
import {
	getAllYoutubeVideos,
	getAllYoutubePlaylists,
	getAllYoutubeChannelInfo,
} from "@/api/YouTube/GetAllYoutubeContent";

// News, Blogs & Case Studies
import {
	getAllNewsContent,
	getAllBlogsContent,
	getAllCaseStudiesContent,
} from "@/graphql/CMS/GetAllNewsBlogsCaseStudies";

// Get All Football Fixtures
import {getLastThreeFixturesContent} from "@/api/Football/GetLastThreeFixtures";

// Get All Shopify Online Store
import {getAllOnlineStoreShirts} from "@/api/Store/GetAllStoreItems";

// Get All Stakeholders
import {getAllBoardOfDirectorsContent} from "@/graphql/CMS/GetAllStakeholders";
import {getAllExecutiveLeadershipsContent} from "@/graphql/CMS/GetAllStakeholders";

// Get All Club Partners
import {getAllClubPartnersExcerpt} from "@/graphql/CMS/GetAllClubPartners";

// Context Providers Components
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";
import GoogleTranslateContextProvider from "@/context/providers/GoogleTranslateContextProvider";
import ShopifyCollectionGlobalContextProvider from "@/context/providers/ShopifyCollectionGlobalContextProvider";

// Components
import Footer from "@/components/Global/Footer/Footer";
import Navbar from "@/components/Global/Navigation/Navbar";
import SmoothScrolling from "@/components/Global/SmoothScrolling";
import BlurryCursorMouse from "@/components/Global/BlurryCursorMouse/BlurryCursorMouse";
import BackToTopButton from "@/components/Global/Elements/BackToTopButton/BackToTopButton";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/Global/Analytics/GoogleTagManager";

const RootLayout = async ({ children }: AppProps | any) => {
	
	const { sortKey, reverse } = defaultSort;

	/// PUBLIC PAGES //
	// Fetch all global content simultaneously using Promise.all
    // Ensure all functions being awaited are indeed Promise-returning functions.
	const promises: Promise<any>[] = [
		getAllTestimonialsContent(),
		getAllJobsPositionsContent(),
		getThemesOptionsContent(),

		// News, Blogs & Case Studies
		getAllNewsContent(),
		getAllBlogsContent(),
		getAllCaseStudiesContent(),

		// Club Partners Content
		getAllClubPartnersExcerpt(),

		// Social Media
		getAllInstagramFeedContent(),

		// Youtube Channel Info
		getAllYoutubeVideos(),
		getAllYoutubeChannelInfo(),

		// Football Fixtures
		getLastThreeFixturesContent(),

		// Shopify Online Store
		getAllOnlineStoreShirts(),

		// Website Links
		getAllMobileLinks(),
		getAllCareerSublinks(),
		getAllCopyrightLinks(),
		getAllNavbarMenuLinks(),
		getAllFooterMenuLinks(),

		// Stakeholders
		getAllBoardOfDirectorsContent(),
		getAllExecutiveLeadershipsContent(),

		// Mega Menu Links
		getAllMegaNavigationLinks(),
		getAllMegaNavigationUsefulSublinks(),
		getAllNewsSublinks(),
		getAllFansSublinks(),
		getAllCommunitySublinks(),
		getAllOurHistorySublinks(),
		getAllAboutTheClubSublinks(),
		getAllBenjaminMkapaStadiumSublinks(),
		getAllPartnershipsAdvertisingSublinks(),

		// Shopify Collections
		getAllShopifyCollectionSearchPageGridView({ collection: "business-website-cta", sortKey, reverse }),
	];

	const [
		testimonials,
		jobsPositions,
		themesOptionsContent,

		// News, Blogs & Case Studies
		news,
		blogs,
		caseStudies,

		// Club Partners
		clubPartners,

		// Social Media
		instagramFeed,

		// Youtube Channel Info
		youtubeVideos,
		youtubeChannelInfo,

		// Football Fixtures
		lastThreeFixtures,

		// Shopify Online Store
		onlineStoreShirts,

		// Website Links
		mobileLinks,
		careerSublinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,

		// Stakeholders
		boardOfDirectorsGrid,
		executiveLeadershipsGrid,

		// Mega Menu Links
		megaNavigationLinks,
		megaNavigationUsefulSublinks,
		newsSublinks,
		fansSublinks,
		communitySublinks,
		ourHistorySublinks,
		aboutTheClubSublinks,
		benjaminMkapaStadiumSublinks,
		partnershipsAdvertisingSublinks,
		
		// Shopify Collections
		businessWebsiteShopifyCollectionContent,

	] = await Promise.all(promises);

	// Construct the globalProps object, ensuring it matches IGlobal.IProps structure.
    // TypeScript will help validate this.
	const globalProps: IGlobal.IProps = {
		testimonials: testimonials,
		jobsPositions: jobsPositions,
		themesOptionsContent: themesOptionsContent,

		// News, Blogs & Case Studies
		news: news,
		blogs: blogs,
		caseStudies: caseStudies,

		// Club Partners
		clubPartners: clubPartners,

		// Social Media
		instagramFeed: instagramFeed,

		// Youtube Channel Info
		youtubeVideos: youtubeVideos,
		youtubeChannelInfo: youtubeChannelInfo,

		// Football Fixtures
		lastThreeFixtures: lastThreeFixtures,

		// Shopify Online Store
		onlineStoreShirts: onlineStoreShirts,

		// Website Links
		mobileLinks: mobileLinks,
		copyrightLinks: copyrightLinks,
		careerSublinks: careerSublinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,

		// Stakeholders
		boardOfDirectorsGrid: boardOfDirectorsGrid,
		executiveLeadershipsGrid: executiveLeadershipsGrid,

		// Mega Menu Links
		newsSublinks: newsSublinks,
		fansSublinks: fansSublinks,
		communitySublinks: communitySublinks,
		ourHistorySublinks: ourHistorySublinks,
		megaNavigationLinks: megaNavigationLinks,
		aboutTheClubSublinks: aboutTheClubSublinks,
		benjaminMkapaStadiumSublinks: benjaminMkapaStadiumSublinks,
		megaNavigationUsefulSublinks: megaNavigationUsefulSublinks,
		partnershipsAdvertisingSublinks: partnershipsAdvertisingSublinks,
	};

	// SHOPIFY GLOBAL PROPS //
	// Construct the shopify globalProps object, ensuring it matches IShopify.IGlobal.IProps structure.
	// TypeScript will help validate this.
	const shopifyCollectionGlobalProps: IShopifyCollection.IProps = {
		// Custom Post Types
		businessWebsiteShopifyCollectionContent: businessWebsiteShopifyCollectionContent,
	};

	return (
		<html lang="en">
			<head>
				<GoogleTagManager />
			</head>
			<GoogleTagManagerNoScript />
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<ShopifyCollectionGlobalContextProvider shopifyCollectionGlobalProps={shopifyCollectionGlobalProps}>
							<GoogleTranslateContextProvider>
								<SmoothScrolling>
									<Navbar />
									<main>{children}</main>
									<Footer />
									<BlurryCursorMouse />
									<BackToTopButton link={`#`} />
								</SmoothScrolling>
							</GoogleTranslateContextProvider>
						</ShopifyCollectionGlobalContextProvider>
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default RootLayout;

