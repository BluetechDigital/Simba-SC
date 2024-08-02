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
