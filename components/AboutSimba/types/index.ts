// About Sub & Main Components
export namespace IAboutSimba {
	export type IProps = {
		title: string;
		titleTwo: string;
		paragraph: string;
		paragraphTwo: string;
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
}