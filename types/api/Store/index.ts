// WEBSITE ONLINE STORE TYPES
export namespace IOnlineStore {
	export type IOnlineStore = {
		id: number;
		slug: string;
		price: string;
		title: string;
		currency: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	}[];

	export interface IOnlineStoreShirts extends IOnlineStore {}
}
