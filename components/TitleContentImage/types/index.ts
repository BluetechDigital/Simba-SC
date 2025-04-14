export namespace ITitleContentImage {
	export type IProps = {
		title: string;
		subtitle: string;
		paragraph: string;
		textTitle: string;
		image: {
			altText: string;
			sourceUrl: string;
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
		displayContentOption: string;
		displayParagraphColor: string;
		displayBackgroundColor: string;
	};
	export type ICard = {
		title: string;
		paragraph: string;
		textTitle: string;
		paragraphColor: string;
		displayContentOption: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
	};
}