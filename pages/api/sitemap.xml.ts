// Imports
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";

/* PAGES SLUGS (URLS) */
import {
	getAllPagesSlugs,
	getAllFansPagesSlugs,
	getAllStadiumPagesSlugs,
	getAllCommunityPagesSlugs,
	getAllOurHistoryPagesSlugs,
	getAllAboutTheClubPagesSlugs,
	getAllPartnershipsAdvertisingPagesSlugs,
} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllNewsPostsSlugs} from "@/functions/graphql/Queries/GetAllNews";
import {getAllBlogsPostsSlugs} from "@/functions/graphql/Queries/GetAllBlogs";
import {getAllCaseStudiesSlugs} from "@/functions/graphql/Queries/GetAllCaseStudies";
import {getAllJobsPositionsSlugs} from "@/functions/graphql/Queries/GetAllJobsPositions";
import {getAllBoardOfDirectorsPostsSlugs} from "@/functions/graphql/Queries/GetAllBoardOfDirectors";
import {getAllExecutiveLeadershipsPostsSlugs} from "@/functions/graphql/Queries/GetAllExecutiveLeaderships";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [
		pagesSlugs,
		blogsPostsSlugs,
		caseStudiesPostsSlugs,
		newsPostsSlugs,
		boardOfDirectorsPostsSlugs,
		allJobsPositionsPostsSlugs,
		executiveLeadershipsPostsSlugs,
		ourHistoryPagesSlugs,
		aboutTheClubPagesSlugs,
		fansPagesSlugs,
		communityPagesSlugs,
		partnershipsAdvertisingPagesSlugs,
		stadiumPagesSlugs,
	] = await Promise.all([
		getAllPagesSlugs(),
		getAllBlogsPostsSlugs(),
		getAllCaseStudiesSlugs(),
		getAllNewsPostsSlugs(),
		getAllBoardOfDirectorsPostsSlugs(),
		getAllJobsPositionsSlugs(),
		getAllExecutiveLeadershipsPostsSlugs(),
		getAllOurHistoryPagesSlugs(),
		getAllAboutTheClubPagesSlugs(),
		getAllFansPagesSlugs(),
		getAllCommunityPagesSlugs(),
		getAllPartnershipsAdvertisingPagesSlugs(),
		getAllStadiumPagesSlugs(),
	]);

	/* Pages, News  Posts Arrays */
	const pagesLinks: any = [];
	const fansPagesLinks: any = [];
	const newsPostsLinks: any = [];
	const blogsPostsLinks: any = [];
	const stadiumPagesLinks: any = [];
	const communityPagesLinks: any = [];
	const ourHistoryPagesLinks: any = [];
	const caseStudiesPostsLinks: any = [];
	const aboutTheClubPagesLinks: any = [];
	const allJobsPositionsPostsLinks: any = [];
	const boardOfDirectorsPostsLinks: any = [];
	const executiveLeadershipsPostsLinks: any = [];
	const partnershipsAdvertisingPagesLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Blogs Dynamic Links
	blogsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/blogs/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		blogsPostsLinks.push(object);
	});

	// News Dynamic Links
	newsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/news/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		newsPostsLinks.push(object);
	});

	// Case Studies Dynamic Links
	caseStudiesPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/case-studies/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		caseStudiesPostsLinks.push(object);
	});

	// All Jobs Positions Dynamic Links
	allJobsPositionsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/case-studies/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		allJobsPositionsPostsLinks.push(object);
	});

	// Board Of Directors Dynamic Links
	boardOfDirectorsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/board-directors/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		boardOfDirectorsPostsLinks.push(object);
	});

	// Executive Leaderships Dynamic Links
	executiveLeadershipsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/executive-leadership/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		executiveLeadershipsPostsLinks.push(object);
	});

	// Our History Dynamic Links
	ourHistoryPagesSlugs?.map((keys: any) => {
		const object = {
			url: `/our-history/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		ourHistoryPagesLinks.push(object);
	});

	// About The Club Dynamic Links
	aboutTheClubPagesSlugs?.map((keys: any) => {
		const object = {
			url: `/about-the-club/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		aboutTheClubPagesLinks.push(object);
	});

	// Fans Dynamic Links
	fansPagesSlugs?.map((keys: any) => {
		const object = {
			url: `/fans/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		fansPagesLinks.push(object);
	});

	// Community Dynamic Links
	communityPagesSlugs?.map((keys: any) => {
		const object = {
			url: `/community/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		communityPagesLinks.push(object);
	});

	// Partnerships Advertising Dynamic Links
	partnershipsAdvertisingPagesSlugs?.map((keys: any) => {
		const object = {
			url: `/partnerships-advertising/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		partnershipsAdvertisingPagesLinks.push(object);
	});

	// Benjamin Mkapa Stadium Dynamic Links
	stadiumPagesSlugs?.map((keys: any) => {
		const object = {
			url: `/benjamin-mkapa-stadium/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		stadiumPagesLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [
		...pagesLinks,
		...fansPagesLinks,
		...newsPostsLinks,
		...blogsPostsLinks,
		...stadiumPagesLinks,
		...communityPagesLinks,
		...ourHistoryPagesLinks,
		...caseStudiesPostsLinks,
		...aboutTheClubPagesLinks,
		...boardOfDirectorsPostsLinks,
		...executiveLeadershipsPostsLinks,
		...partnershipsAdvertisingPagesLinks,
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
