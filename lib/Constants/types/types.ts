// Constants Types
export namespace IConstantsTypes {
	export type ITags = {
		cart: string;
		products: string;
		collections: string;
	};
	
	export type ISortFilterItem = {
		title: string;
		reverse: boolean;
		slug: string | null;
		sortKey: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE";
	};

	export type IPathFilterItem = {
		title: string;
		path: string
	};
}