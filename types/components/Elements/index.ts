// Elements
export namespace IElements {
	export type ITitle = {
		style?: any;
		content: string;
		className: string;
	};
	export type IParagraph = {
		style?: any;
		content: string;
		className: string;
	};
	export type ICountUp = {
		number: string;
		suffix?: string;
		decimals?: number;
		className: string;
	};
	export namespace IBackButtons {
		export type IProps = {
			link: string;
		};
	}
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
}
