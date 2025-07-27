export namespace ILatestNewsGrid {
	export type IProps = {
		title: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		ctaLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		slug: string;
		date: string;
		title: string;
		className: string;
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