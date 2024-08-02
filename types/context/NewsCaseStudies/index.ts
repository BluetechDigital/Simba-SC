// WEBSITE NEWS AND CASE STUDIES TYPES
export namespace INewsBlogsCaseStudies {
	export type INews = {
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
	}[];

	export interface IBlogs extends INews {}
	export interface ICaseStudies extends INews {}
}
