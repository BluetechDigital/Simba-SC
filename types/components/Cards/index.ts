export type ILatestNewsGridCard = {
	slug: string;
	date: string;
	title: string;
	tailwindStyling: string;
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
