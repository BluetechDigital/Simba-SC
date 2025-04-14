export namespace ITitleParagraphDynamicColour {
	export type IProps = {
		title: string;
		paragraph: string;
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
		displayContentColor: string;
		displayBackgroundColor: string;
	};
}