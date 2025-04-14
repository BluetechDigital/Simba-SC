export namespace IContactForm {
	export type IProps = {
		title: string;
		formTitle: string;
		paragraph: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	export type IForm = {
		formTitle: string;
	};
}