export namespace IGeneralInformation {
	export type IProps = {
		title: string;
		paragraph: string;
		informationGrid: {
			title: string;
			paragraph: string;
		}[];
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type ICard = {
		title: IProps["title"];
		paragraph: IProps["paragraph"];
	};
}