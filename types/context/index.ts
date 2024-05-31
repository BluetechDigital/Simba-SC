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
	tiktokLink: {
		url: string;
		title: string;
		target: string;
	};
	youtubeLink: {
		url: string;
		title: string;
		target: string;
	};
	copyrightText: string;
	phoneNumberTwo: string;
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
	newsletter: {
		title: string;
		paragraph: string;
		mainTitle: string;
		bottomTextarea: string;
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	megaNavigation: {
		fansVideoElement: string;
		displayFansVideoElement: boolean;
	};
	topNavigation: {
		foundationPageLink: {
			url: string;
			title: string;
			target: string;
		};
		sponsorsIcons: [
			{
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			}
		];
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

// WEBSITE LINKS AND SUBLINKS
export type IMobileLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
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
export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
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
export type IMegaNavigationLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IMegaNavigationUsefulSublinks = [
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
	jobsPositions: IJobsPositions;
	careerSublinks: ICareerSublinks;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	megaNavigationLinks: IMegaNavigationLinks;
	themesOptionsContent: IThemesOptionsContent;
	boardOfDirectorsGrid: IBoardOfDirectorsGrid;
	executiveLeadershipsGrid: IExecutiveLeadershipsGrid;
	megaNavigationUsefulSublinks: IMegaNavigationUsefulSublinks;
};
export type IGlobalContext = {
	news: INews;
	blogs: IBlogs;
	mobileLinks: IMobileLinks;
	caseStudies: ICaseStudies;
	testimonials: ITestimonials;
	jobsPositions: IJobsPositions;
	careerSublinks: ICareerSublinks;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	megaNavigationLinks: IMegaNavigationLinks;
	themesOptionsContent: IThemesOptionsContent;
	boardOfDirectorsGrid: IBoardOfDirectorsGrid;
	executiveLeadershipsGrid: IExecutiveLeadershipsGrid;
	megaNavigationUsefulSublinks: IMegaNavigationUsefulSublinks;
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
