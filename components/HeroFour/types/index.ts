export namespace IHeroFour {
	export type IProps = {
		title: string;
		paragraph: string;
		displayVideo: boolean;
		displayFullHeight: boolean;
		video: {
			link: string;
			title: string;
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
	};
	export type ICard = {
		video: IProps["video"];
		title: IProps["title"];
		paragraph: IProps["paragraph"];
		buttonLink: IProps["buttonLink"];
		displayVideo: IProps["displayVideo"];
		buttonLinkTwo: IProps["buttonLinkTwo"];
	};
	export type IVideoCard = {
		video: IProps["video"];
		displayVideo: IProps["displayVideo"];
	};
}