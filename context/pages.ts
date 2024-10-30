// Imports
import {
	IPage,
	IPostTypes,
	IFlexibleContentType,
} from "@/types/context/Providers";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	news: "news",
	pages: "pages",
	posts: "posts",
	caseStudies: "caseStudies",
	clubPartners: "clubPartners",
	testimonials: "testimonials",
	jobPositions: "jobPositions",
	boardOfDirectors: "boardofDirectors",
	executiveLeaderships: "executiveLeaderships",

	// Preview pages
	previewPage: "page",
	previewPost: "post",
};

export const pageType: IPage.ITypes = {
	// Public pages
	fans: "fans",
	news: "news",
	home: "Home",
	blogs: "blogs",
	community: "community",
	ourHistory: "our-history",
	caseStudies: "case-studies",
	clubPartners: "clubPartners",
	jobPositions: "job-positions",
	aboutTheClub: "about-the-club",
	stadium: "benjamin-mkapa-stadium",
	boardOfDirectors: "board-of-directors",
	executiveLeadership: "executive-leadership",
	partnershipsAdvertising: "partnerships-advertising",
};

export const flexibleContentType: IFlexibleContentType = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	clubPartner: "ClubPartner_Partnerscontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};
