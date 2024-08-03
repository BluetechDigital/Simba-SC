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
export type ISmoothScrolling = {
	children: React.ReactNode;
};
export type IScrollYProgressReveal = {
	tailwindStyling?: string;
	children: React.ReactNode;
};
