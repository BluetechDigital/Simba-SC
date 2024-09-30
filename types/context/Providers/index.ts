// Imports
import {
	IContent,
	ITestimonials,
	IJobsPositions,
	IThemesOptionsContent,
} from "@/types/context";
import {IOnlineStore} from "@/types/api/Store";
import {IFixtures} from "@/types/context/Fixtures";
import {IInstagramFeed} from "@/types/context/SocialMedia";
import {ILinks, IMegaMenuLinks} from "@/types/context/Links";
import {INewsBlogsCaseStudies} from "@/types/context/NewsCaseStudies";
import {IClubPartnersPostType} from "@/types/components/ClubPartners";
import {IYoutubeChannelInfo, IYoutubeVideos} from "@/types/api/Youtube";

/* CONTEXT PROVIDERS  */
export type IPostTypes = {
	news: string;
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
	caseStudies: string;
	testimonials: string;
	jobPositions: string;
	clubPartners: string;
	boardOfDirectors: string;
	executiveLeaderships: string;
};
export type IPageTypes = {
	home: string;
	news: string;
	fans: string;
	blogs: string;
	stadium: string;
	community: string;
	ourHistory: string;
	caseStudies: string;
	clubPartners: string;
	aboutTheClub: string;
	jobPositions: string;
	boardOfDirectors: string;
	executiveLeadership: string;
	partnershipsAdvertising: string;
};
export type IPageContext = {
	content: IContent;
	postTypeFlexibleContent: string;
};
export type IGlobalProps = {
	testimonials: ITestimonials;
	jobsPositions: IJobsPositions;
	themesOptionsContent: IThemesOptionsContent;

	// News, Blogs & Case Studies
	news: INewsBlogsCaseStudies.INews;
	blogs: INewsBlogsCaseStudies.IBlogs;
	caseStudies: INewsBlogsCaseStudies.ICaseStudies;

	// Club Partners
	clubPartners: IClubPartnersPostType.IClubPartnersExcept;

	// Social Media
	instagramFeed: IInstagramFeed;

	// Youtube Channel Info
	youtubeVideos: IYoutubeVideos;
	youtubeChannelInfo: IYoutubeChannelInfo;

	// Football Fixtures
	lastThreeFixtures: IFixtures;

	// Shopify Online Store
	onlineStoreShirts: IOnlineStore.IOnlineStoreShirts;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	careerSublinks: ILinks.ICareerSublinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;

	// Stakeholders
	boardOfDirectorsGrid: ILinks.IBoardOfDirectorsLinks;
	executiveLeadershipsGrid: ILinks.IExecutiveLeadershipsLinks;

	// Mega Menu Links
	newsSublinks: IMegaMenuLinks.INewsSublinks;
	fansSublinks: IMegaMenuLinks.IFansSublinks;
	communitySublinks: IMegaMenuLinks.ICommunitySublinks;
	ourHistorySublinks: IMegaMenuLinks.IOurHistorySublinks;
	megaNavigationLinks: IMegaMenuLinks.IMegaNavigationLinks;
	aboutTheClubSublinks: IMegaMenuLinks.IAboutTheClubSublinks;
	benjaminMkapaStadiumSublinks: IMegaMenuLinks.IStadiumSublinks;
	megaNavigationUsefulSublinks: IMegaMenuLinks.IMegaNavigationUsefulSublinks;
	partnershipsAdvertisingSublinks: IMegaMenuLinks.IPartnershipsAdvertisingSublinks;
};
export type IGlobalContext = {
	testimonials: ITestimonials;
	jobsPositions: IJobsPositions;
	themesOptionsContent: IThemesOptionsContent;

	// News, Blogs & Case Studies
	news: INewsBlogsCaseStudies.INews;
	blogs: INewsBlogsCaseStudies.IBlogs;
	caseStudies: INewsBlogsCaseStudies.ICaseStudies;

	// Club Partners
	clubPartners: IClubPartnersPostType.IClubPartnersExcept;

	// Social Media
	instagramFeed: IInstagramFeed;

	// Youtube Channel Info
	youtubeVideos: IYoutubeVideos;
	youtubeChannelInfo: IYoutubeChannelInfo;

	// Football Fixtures
	lastThreeFixtures: IFixtures;

	// Shopify Online Store
	onlineStoreShirts: IOnlineStore.IOnlineStoreShirts;

	// Navigation Links
	mobileLinks: ILinks.IMobileLinks;
	careerSublinks: ILinks.ICareerSublinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;

	// Stakeholders
	boardOfDirectorsGrid: ILinks.IBoardOfDirectorsLinks;
	executiveLeadershipsGrid: ILinks.IExecutiveLeadershipsLinks;

	// Mega Menu Links
	newsSublinks: IMegaMenuLinks.INewsSublinks;
	fansSublinks: IMegaMenuLinks.IFansSublinks;
	communitySublinks: IMegaMenuLinks.ICommunitySublinks;
	ourHistorySublinks: IMegaMenuLinks.IOurHistorySublinks;
	megaNavigationLinks: IMegaMenuLinks.IMegaNavigationLinks;
	aboutTheClubSublinks: IMegaMenuLinks.IAboutTheClubSublinks;
	benjaminMkapaStadiumSublinks: IMegaMenuLinks.IStadiumSublinks;
	megaNavigationUsefulSublinks: IMegaMenuLinks.IMegaNavigationUsefulSublinks;
	partnershipsAdvertisingSublinks: IMegaMenuLinks.IPartnershipsAdvertisingSublinks;
};
export type IPageContextProvider = {
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: string;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IApolloContextProvider = {
	children: React.ReactNode;
};
