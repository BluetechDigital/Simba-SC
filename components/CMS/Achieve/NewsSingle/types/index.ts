export namespace INewsSingle {
	export type IProps = {
		title: string;
		readTime: string;
		paragraph: string;
		articleType: string;
		boldParagraph: string;
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
}