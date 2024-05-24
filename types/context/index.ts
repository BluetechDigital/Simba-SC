export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type INews = [
	{
		node: {
			id: string;
			slug: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IBlogs = [
	{
		node: {
			id: string;
			slug: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IContent = [
	{
		content: any;
	}
];
export type IMobileLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ICaseStudies = [
	{
		node: {
			id: string;
			slug: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
				name: string;
				jobTitle: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IJobsPositions = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IInstagramFeed = [
	{
		node: {
			id: string;
			slug: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type ICareerSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ICopyrightLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IAboutUsSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IManagementsJobs = [
	{
		node: {
			slug: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IOurProgramsLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IMediaCentersSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IOperationsTeamsJobs = [
	{
		node: {
			slug: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IBoardOfDirectorsGrid = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	textarea: string;
	phoneNumber: string;
	facebookLink: {
		url: string;
		title: string;
		target: string;
	};
	twitterLink: {
		url: string;
		title: string;
		target: string;
	};
	linkedinLink: {
		url: string;
		title: string;
		target: string;
	};
	instagramLink: {
		url: string;
		title: string;
		target: string;
	};
	copyrightText: string;
	phoneNumberTwo: string;
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
	menuColumnThree: {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type IExecutiveLeadershipsGrid = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

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
	boardOfDirectors: string;
	executiveLeaderships: string;
};
export type IPageContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IGlobalProps = {
	news: INews;
	blogs: IBlogs;
	mobileLinks: IMobileLinks;
	caseStudies: ICaseStudies;
	testimonials: ITestimonials;
	instagramFeed: IInstagramFeed;
	jobsPositions: IJobsPositions;
	careerSublinks: ICareerSublinks;
	copyrightLinks: ICopyrightLinks;
	aboutUsSublinks: IAboutUsSublinks;
	navbarMenuLinks: INavbarMenuLinks;
	managementsJobs: IManagementsJobs;
	footerMenuLinks: IFooterMenuLinks;
	operationsTeamsJobs: IOperationsTeamsJobs;
	themesOptionsContent: IThemesOptionsContent;
	boardOfDirectorsGrid: IBoardOfDirectorsGrid;
	executiveLeadershipsGrid: IExecutiveLeadershipsGrid;
};
export type IGlobalContext = {
	news: INews;
	blogs: IBlogs;
	mobileLinks: IMobileLinks;
	caseStudies: ICaseStudies;
	testimonials: ITestimonials;
	instagramFeed: IInstagramFeed;
	jobsPositions: IJobsPositions;
	careerSublinks: ICareerSublinks;
	copyrightLinks: ICopyrightLinks;
	aboutUsSublinks: IAboutUsSublinks;
	managementsJobs: IManagementsJobs;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	operationsTeamsJobs: IOperationsTeamsJobs;
	themesOptionsContent: IThemesOptionsContent;
	boardOfDirectorsGrid: IBoardOfDirectorsGrid;
	executiveLeadershipsGrid: IExecutiveLeadershipsGrid;
};
export type IPageContextProvider = {
	seo: ISeo;
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
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
export type IPostTypeFlexibleContent = {
	postTypeFlexibleContent: string;
};

// SLUG RESPONSE
export type SlugResponse = {
	slug: string;
	modified: string;
};

export interface ISlug extends Array<SlugResponse> {}
