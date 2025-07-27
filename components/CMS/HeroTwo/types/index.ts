export namespace IHeroTwo {
	export type IProps = {
		title: string;
		paragraph: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}