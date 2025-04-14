export namespace ICTA {
	export type IProps = {
		title: string;
		paragraph: string;
		displayVideo: boolean;
		displayBigCta: boolean;
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
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type IVideoCard = {
		video: IProps["video"];
		displayVideo: IProps["displayVideo"];
	};
}