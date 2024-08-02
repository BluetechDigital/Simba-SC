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
export type ILatestNewsGrid = {
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
