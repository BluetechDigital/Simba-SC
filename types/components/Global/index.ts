export type IPagination = {
	contentArray: any;
	contentType: string;
	className: string;
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
export type ISmoothScrolling = {
	children: React.ReactNode;
};
export type IScrollYProgressReveal = {
	className?: string;
	children: React.ReactNode;
};
