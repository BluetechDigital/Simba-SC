export namespace ILatestVideoBlock {
		export type IProps = {
			title: string;
			video: {
				link: string;
				title: string;
				mimeType: string;
				mediaItemUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
			subtitle: string;
			paragraph: string;
			displayVideo: boolean;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			displayButtonColor: string;
			displayContentColor: string;
			displayBackgroundSvg: boolean;
			displayBackgroundColor: string;
			videoBackgroundImage: {
				sourceUrl: string;
			};
		};
		export type IVideoCard = {
			video: IProps["video"];
			displayVideo: IProps["displayVideo"];
		};
	}