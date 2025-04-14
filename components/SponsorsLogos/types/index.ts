export namespace ISponsorsLogos {
	export type IProps = {
		logoGrid: {
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}[];
	};
}