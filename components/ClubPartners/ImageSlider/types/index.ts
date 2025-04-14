export namespace IImageSlider {
	export type IProps = {
		imageSlider: {
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}[];
	};
}