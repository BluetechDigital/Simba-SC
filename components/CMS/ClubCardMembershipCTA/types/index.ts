export namespace IClubCardMembershipCTA {
	export type IProps = {
		title: string;
		displayVideo: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
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
		clubCardMembershipText: string;
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