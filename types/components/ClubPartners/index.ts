// Club Partners CUSTOM POST TYPE
export namespace IClubPartnersPostType {
	export type IClubPartnersExcept = {
		node: {
			slug: string;
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
	export type IClubPartnersContent = {
		clubPartnersContent: {
			/* Dynamic ACF Components specifically
			 for the Club Partners Custom Post Type */
			titleContentImage: {
				title: string;
				paragraph: string;
				buttonLink: {
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
		};
	};
}
