export namespace INewsletterBanner {
	export type IProps = {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
	};
}