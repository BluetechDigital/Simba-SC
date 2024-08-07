// Imports
import type {AppProps} from "next/app";

// Styling
import "@/styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context/Providers";

// Queries Functions
import {
	getMobileLinks,
	getFansSublinks,
	getNewsSublinks,
	getCopyrightLinks,
	getCareerSublinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getCommunitySublinks,
	getOurHistorySublinks,
	getMegaNavigationLinks,
	getAboutTheClubSublinks,
	getMegaNavigationUsefulSublinks,
	getBenjaminMkapaStadiumSublinks,
	getPartnershipsAdvertisingSublinks,
} from "@/graphql/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/graphql/GetAllTestimonials";
import {getAllJobsPositionsContent} from "@/graphql/GetAllJobsPositions";

// Instagram Feed
import {getAllInstagramFeedContent} from "@/functions/SocialMedia/InstagramFeed";

// News, Blogs & Case Studies
import {
	getAllNewsContent,
	getAllBlogsContent,
	getAllCaseStudiesContent,
} from "@/graphql/GetAllNewsBlogsCaseStudies";

// Get All Football Fixtures
import {getLastThreeFixturesContent} from "@/functions/Football/GetLastThreeFixtures";

// Get All Stakeholders
import {getAllBoardOfDirectorsContent} from "@/graphql/GetAllStakeholders";
import {getAllExecutiveLeadershipsContent} from "@/graphql/GetAllStakeholders";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import SmoothScrolling from "@/components/Global/SmoothScrolling";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";

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

		// Social Media
		getAllInstagramFeedContent(),

		// Football Fixtures
		getLastThreeFixturesContent(),

		// Website Links
		getMobileLinks(),
		getCareerSublinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),

		// Stakeholders
		getAllBoardOfDirectorsContent(),
		getAllExecutiveLeadershipsContent(),

		// Mega Menu Links
		getMegaNavigationLinks(),
		getMegaNavigationUsefulSublinks(),
		getNewsSublinks(),
		getFansSublinks(),
		getCommunitySublinks(),
		getOurHistorySublinks(),
		getAboutTheClubSublinks(),
		getBenjaminMkapaStadiumSublinks(),
		getPartnershipsAdvertisingSublinks(),
	];

	const [
		testimonials,
		jobsPositions,
		themesOptionsContent,

		// News, Blogs & Case Studies
		news,
		blogs,
		caseStudies,

		// Social Media
		instagramFeed,

		// Football Fixtures
		lastThreeFixtures,

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

	const globalProps: IGlobalProps = {
		testimonials: testimonials,
		jobsPositions: jobsPositions,
		themesOptionsContent: themesOptionsContent,

		// News, Blogs & Case Studies
		news: news,
		blogs: blogs,
		caseStudies: caseStudies,

		// Social Media
		instagramFeed: instagramFeed,

		// Football Fixtures
		lastThreeFixtures: lastThreeFixtures,

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
							<BackToTopButton />
						</SmoothScrolling>
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
