// Imports
import type {AppProps} from "next/app";

// Styling
import "@/styles/globals.scss";

// Global Context Provider
import {IGlobal} from "@/context/types/context";

// Queries Functions
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
} from "@/graphql/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/graphql/GetAllTestimonials";
import {getAllJobsPositionsContent} from "@/graphql/GetAllJobsPositions";

// Instagram Feed
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
} from "@/graphql/GetAllNewsBlogsCaseStudies";

// Get All Football Fixtures
import {getLastThreeFixturesContent} from "@/api/Football/GetLastThreeFixtures";

// Get All Shopify Online Store
import {getAllOnlineStoreShirts} from "@/api/Store/GetAllStoreItems";

// Get All Stakeholders
import {getAllBoardOfDirectorsContent} from "@/graphql/GetAllStakeholders";
import {getAllExecutiveLeadershipsContent} from "@/graphql/GetAllStakeholders";

// Get All Club Partners
import {getAllClubPartnersExcerpt} from "@/graphql/GetAllClubPartners";


// Components
import Footer from "@/components/Global/Footer/Footer";
import Navbar from "@/components/Global/Navigation/Navbar";
import SmoothScrolling from "@/components/Global/SmoothScrolling";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";
import BackToTopButton from "@/components/Elements/BackToTopButton/BackToTopButton";
import BlurryCursorMouse from "@/components/Global/BlurryCursorMouse/BlurryCursorMouse";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */

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
	] = await Promise.all(promises);

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

	return (
		<html lang="en">
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<SmoothScrolling>
							<Navbar />
							<main>{children}</main>
							<Footer />
							<BlurryCursorMouse />
							<BackToTopButton link={`#`} />
						</SmoothScrolling>
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;

