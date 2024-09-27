// ClubPartners CUSTOM POST TYPE
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
		clubPartners: {
			title: string;
		};
	};
}
