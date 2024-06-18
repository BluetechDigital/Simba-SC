// Imports
import type {AppProps} from "next/app";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

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
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllNewsContent} from "@/functions/graphql/Queries/GetAllNews";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogs";
import {getAllCaseStudiesContent} from "@/functions/graphql/Queries/GetAllCaseStudies";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";
import {getAllJobsPositionsContent} from "@/functions/graphql/Queries/GetAllJobsPositions";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";
import {getLastThreeFixturesContent} from "@/functions/Football/GetLastThreeFixtures";
import {getAllBoardOfDirectorsContent} from "@/functions/graphql/Queries/GetAllBoardOfDirectors";
import {getAllExecutiveLeadershipsContent} from "@/functions/graphql/Queries/GetAllExecutiveLeaderships";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const promises: Promise<any>[] = [
		getMobileLinks(),
		getCareerSublinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getMegaNavigationLinks(),
		getMegaNavigationUsefulSublinks(),
		getNewsSublinks(),
		getFansSublinks(),
		getCommunitySublinks(),
		getOurHistorySublinks(),
		getAboutTheClubSublinks(),
		getBenjaminMkapaStadiumSublinks(),
		getPartnershipsAdvertisingSublinks(),
		getThemesOptionsContent(),
		getAllNewsContent(),
		getAllBlogsContent(),
		getAllCaseStudiesContent(),
		getAllTestimonialsContent(),
		getAllJobsPositionsContent(),
		getAllBoardOfDirectorsContent(),
		getAllExecutiveLeadershipsContent(),

		// Football Fixtures
		// getLastThreeFixturesContent(),
	];

	const [
		mobileLinks,
		careerSublinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		megaNavigationLinks,
		megaNavigationUsefulSublinks,
		newsSublinks,
		fansSublinks,
		communitySublinks,
		ourHistorySublinks,
		aboutTheClubSublinks,
		benjaminMkapaStadiumSublinks,
		partnershipsAdvertisingSublinks,
		themesOptionsContent,
		news,
		blogs,
		caseStudies,
		testimonials,
		jobsPositions,
		boardOfDirectorsGrid,
		executiveLeadershipsGrid,

		// Football Fixtures
		// lastThreeFixtures,
	] = await Promise.all(promises);

	const globalProps: IGlobalProps = {
		news: news,
		blogs: blogs,
		caseStudies: caseStudies,
		testimonials: testimonials,
		jobsPositions: jobsPositions,
		boardOfDirectorsGrid: boardOfDirectorsGrid,
		themesOptionsContent: themesOptionsContent,
		executiveLeadershipsGrid: executiveLeadershipsGrid,

		// Football Fixtures
		// lastThreeFixtures: lastThreeFixtures,

		// Website Links
		mobileLinks: mobileLinks,
		fansSublinks: fansSublinks,
		newsSublinks: newsSublinks,
		copyrightLinks: copyrightLinks,
		careerSublinks: careerSublinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
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
						<Navbar />
						<main>{children}</main>
						<Footer />
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
