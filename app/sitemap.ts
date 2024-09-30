// Imports
import {MetadataRoute} from "next";

// Get All Pages
import {
	getAllPagesSlugs,
	getAllFansPagesSlugs,
	getAllStadiumPagesSlugs,
	getAllCommunityPagesSlugs,
	getAllOurHistoryPagesSlugs,
	getAllAboutTheClubPagesSlugs,
	getAllPartnershipsAdvertisingPagesSlugs,
} from "@/graphql/GetAllPagesSlugs";

// Get All News, Blogs & Case Studies
import {
	getAllNewsPostsSlugs,
	getAllBlogsPostsSlugs,
	getAllCaseStudiesSlugs,
} from "@/graphql/GetAllNewsBlogsCaseStudies";

// Get All Stakeholders
import {
	getAllBoardOfDirectorsPostsSlugs,
	getAllExecutiveLeadershipsPostsSlugs,
} from "@/graphql/GetAllStakeholders";

// Get All Jobs Positions
import {getAllJobsPositionsSlugs} from "@/graphql/GetAllJobsPositions";

// Club Partners
import {getAllClubPartnersSlugs} from "@/graphql/GetAllClubPartners";

const sitemap = async () => {
	const [
		pagesSlugs,
		fansSlugs,
		newsSlugs,
		blogsSlugs,
		stadiumSlugs,
		communitySlugs,
		ourHistorySlugs,
		caseStudiesSlugs,
		jobPositionsSlugs,
		aboutTheClubSlugs,
		boardOfDirectorsSlugs,
		executiveLeadershipSlugs,
		partnershipsAdvertisingSlugs,
		clubPartnersSlugs,
	] = await Promise.all([
		getAllPagesSlugs(),
		getAllFansPagesSlugs(),
		getAllNewsPostsSlugs(),
		getAllBlogsPostsSlugs(),
		getAllStadiumPagesSlugs(),
		getAllCommunityPagesSlugs(),
		getAllOurHistoryPagesSlugs(),
		getAllCaseStudiesSlugs(),
		getAllJobsPositionsSlugs(),
		getAllAboutTheClubPagesSlugs(),
		getAllBoardOfDirectorsPostsSlugs(),
		getAllExecutiveLeadershipsPostsSlugs(),
		getAllPartnershipsAdvertisingPagesSlugs(),
		getAllClubPartnersSlugs(),
	]);

	const siteUrl: any = process.env.SITE_URL;

	/* Pages, News Insights Posts Arrays */
	const pagesLinks: any[] = [];
	const fansLinks: any = [];
	const newsLinks: any = [];
	const blogsLinks: any = [];
	const stadiumLinks: any = [];
	const communityLinks: any = [];
	const ourHistoryLinks: any = [];
	const caseStudiesLinks: any = [];
	const jobPositionsLinks: any = [];
	const aboutTheClubLinks: any = [];
	const boardOfDirectorsLinks: any = [];
	const executiveLeadershipLinks: any = [];
	const partnershipsAdvertisingLinks: any = [];
	const clubPartnersLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Fans Pages Dynamic Links
	fansSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/fans/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		fansLinks.push(object);
	});

	// News Pages Dynamic Links
	newsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/news/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		newsLinks.push(object);
	});

	// Blogs Pages Dynamic Links
	blogsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/blogs/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		blogsLinks.push(object);
	});

	// Benjamin Mkapa Stadium Pages Dynamic Links
	stadiumSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/benjamin-mkapa-stadium/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		stadiumLinks.push(object);
	});

	// Community Pages Dynamic Links
	communitySlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/community/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		communityLinks.push(object);
	});

	// Our History Pages Dynamic Links
	ourHistorySlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/our-history/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		ourHistoryLinks.push(object);
	});

	// Case Studies Pages Dynamic Links
	caseStudiesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/case-studies/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		caseStudiesLinks.push(object);
	});

	// Club Partners Pages Dynamic Links
	clubPartnersSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/club-partners/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		clubPartnersLinks.push(object);
	});

	// Job Positions Pages Dynamic Links
	jobPositionsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/job-positions/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		jobPositionsLinks.push(object);
	});

	// About The Club Pages Dynamic Links
	aboutTheClubSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/about-the-club/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		aboutTheClubLinks.push(object);
	});

	// Board Of Directors Pages Dynamic Links
	boardOfDirectorsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/board-of-directors/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		boardOfDirectorsLinks.push(object);
	});

	// Executive Leadership Pages Dynamic Links
	executiveLeadershipSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/executive-leadership/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		executiveLeadershipLinks.push(object);
	});

	// Partnerships Advertising Pages Dynamic Links
	partnershipsAdvertisingSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/partnerships-advertising/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		partnershipsAdvertisingLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: MetadataRoute.Sitemap = [
		...pagesLinks,
		...fansLinks,
		...newsLinks,
		...blogsLinks,
		...stadiumLinks,
		...communityLinks,
		...ourHistoryLinks,
		...caseStudiesLinks,
		...jobPositionsLinks,
		...aboutTheClubLinks,
		...boardOfDirectorsLinks,
		...executiveLeadershipLinks,
		...partnershipsAdvertisingLinks,
		...clubPartnersLinks,
	];

	return allLinks;
};

export default sitemap;
