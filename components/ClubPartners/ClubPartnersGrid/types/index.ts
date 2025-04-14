export namespace IClubPartnersGrid {
	export type IProps = {
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
	export type ICard = {
		slug: IProps["slug"];
		title: IProps["title"];
		excerpt: IProps["excerpt"];
		featuredImage: IProps["featuredImage"];
	};
}