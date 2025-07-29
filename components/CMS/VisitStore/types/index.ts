// Imports
import { IShopify } from "@/lib/shopify/types/types";

export namespace IVisitStore {
	export type IProps = {
		title: string;
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
	export type ISwiperSlider = {}

	export type ICard = {
		index: number;
		id: IShopify.IShopifyProduct[`id`];
		title: IShopify.IShopifyProduct[`title`];
		handle: IShopify.IShopifyProduct[`handle`];
		priceRange: IShopify.IShopifyProduct[`priceRange`] | any;
		featuredImage: IShopify.IShopifyProduct[`featuredImage`];
	};
}