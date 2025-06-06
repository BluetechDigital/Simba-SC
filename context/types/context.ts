// Imports
import {
	ILinks,
	IContent,
	IMegaMenuLinks,
	ICustomPostTypes,
} from "@/types/index";

// API
import {IOnlineStore} from "@/api/Store/GetAllStoreItems";
import {IInstagram} from "@/api/SocialMedia/InstagramFeed";
import {IYoutube} from "@/api/YouTube/GetAllYoutubeContent";
import { IFixtures } from "@/api/Football/GetLastThreeFixtures";


/* CONTEXT PROVIDERS  */
/* POST: Project Types, Content 
& Content Provider Interface */
export namespace IPost {
	export type ITypes = {
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
}

/* PAGE: Project Types, Content 
& Content Provider Interface */
export namespace IPage {
	export type ITypes = {
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
	export type IContext = {
		memoizedValues: {
			content: IContent;
			postTypeFlexibleContent: string;
		}
	};
	export type IContextProvider = {
		content: IContent;
		children: React.ReactNode;
		postTypeFlexibleContent: string;
	};
}

/* GLOBAL: Project Props, Content 
& Content Provider Interface */
export namespace IGlobal {
    export type IProps = {

        // Custom Post Types
		testimonials: ICustomPostTypes.ITestimonials;
		jobsPositions: ICustomPostTypes.IJobsPositions;
		themesOptionsContent: ICustomPostTypes.IThemesOptions;

		// News, Blogs & Case Studies Post Types
		news: ICustomPostTypes.INews;
		blogs: ICustomPostTypes.IBlogs;
		caseStudies: ICustomPostTypes.ICaseStudies;

		// Club Partners
		clubPartners: ICustomPostTypes.IClubPartners.IExcept;

		// Social Media
		instagramFeed: IInstagram.IFeed;

		// Youtube Channel Info
		youtubeVideos: IYoutube.IYoutubeVideos;
		youtubeChannelInfo: IYoutube.IYoutubeChannelInfo;

		// Football Fixtures
		lastThreeFixtures: IFixtures.IProps;

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
	export type IContext = IProps;
	export type IContextProvider = {
		globalProps: IProps;
		children: React.ReactNode;
	};  
}

export namespace IApollo {
	export type IContextProvider = {
		children: React.ReactNode;
	};
}
export namespace IGoogleTranslate {
	export type IContextProvider = {
		children: React.ReactNode;
	};
}
export namespace IFlexibleContentType {
	export type ITypes = {
		pages: string;
        clubPartner: string;
        previewPage: string;
        previewPost: string;
	};
}