// Components
export type IHero = {
	heroSlider: [
		{
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};

export type INewsSingle = {
	title: string;
	readTime: string;
	paragraph: string;
	articleType: string;
	boldParagraph: string;
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};

// Sub-Components
export type IFixtures = {
	fixture: {
		id: number;
		referee: string;
		timezone: string;
		date: string;
		timestamp: number;
	};
	league: {
		id: number;
		name: string;
		country: string;
		logo: string;
		flag: string;
		season: number;
		round: string;
	};
	teams: {
		home: {
			id: number;
			name: string;
			logo: string;
			winner: boolean;
		};
		away: {
			id: number;
			name: string;
			logo: string;
			winner: boolean;
		};
	};
	goals: {
		home: number;
		away: number;
	};
	score: {
		halftime: {
			home: number;
			away: number;
		};
		fulltime: {
			home: number;
			away: number;
		};
		extratime: {
			home: number;
			away: number;
		};
		penalty: {
			home: number;
			away: number;
		};
	};
}[];

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};
export type IMaintenance = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IMegaNavigation = {
	menuActive: boolean;
	setMenuActive: any;
};

// Cards

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IBackToTopButton = {
	link: string;
};
export type INewsLatestArticles = {
	slug: string;
	date: string;
	title: string;
	excerpt: string;
	articleType?: string;
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
export type IMegaNavVideoWrapper = {
	children: React.ReactNode;
};
