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

	/* Dynamic ACF Components specifically
	for the Club Partners Custom Post Type */
	export type IClubPartnersContent = {
		partnersContent: {
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
