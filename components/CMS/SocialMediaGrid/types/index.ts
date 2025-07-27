export namespace ISocialMediaGrid {
	export type IProps = {
		title: string;
	};
	export type ICard = {
		index: number;
		caption: string;
		media_url: string;
		permalink: string;
		media_type: string;
		thumbnail_url: string;
	};
}