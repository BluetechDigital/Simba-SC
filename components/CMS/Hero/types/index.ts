export namespace IHero {
	export type IProps = {
		heroSlider:{
			title: string;
			paragraph: string;
			displayVideo: boolean;
			video: {
				title: string;
				mimeType: string;
				mediaItemUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}[];
	};
	export type ICard = {
		title: IProps[`heroSlider`][number][`title`];
		video: IProps[`heroSlider`][number][`video`];
		paragraph: IProps[`heroSlider`][number][`paragraph`];
		buttonLink: IProps[`heroSlider`][number][`buttonLink`];
		displayVideo: IProps[`heroSlider`][number][`displayVideo`];
		buttonLinkTwo: IProps[`heroSlider`][number][`buttonLinkTwo`];
		backgroundImage: IProps[`heroSlider`][number][`backgroundImage`];
	};
	export type IVideoCard = {
		video: IProps[`heroSlider`][number][`video`];
		displayVideo: IProps[`heroSlider`][number][`displayVideo`];
    };
}