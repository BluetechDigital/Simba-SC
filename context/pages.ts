// Imports
import {IPostTypes, IFlexibleContentType} from "@/types/context";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	news: "news",
	pages: "pages",
	posts: "posts",
	caseStudies: "caseStudies",
	testimonials: "testimonials",
	jobPositions: "jobPositions",
	boardOfDirectors: "boardofDirectors",
	executiveLeaderships: "executiveLeaderships",

	// Preview pages
	previewPage: "page",
	previewPost: "post",
};
export const homePage: string = "Home";
export const errorPage: string = "error-page";
export const flexibleContentType: IFlexibleContentType = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};
