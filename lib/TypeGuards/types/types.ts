// Type Guards Types
export namespace ITypeGuardsTypes {
	export type IShopifyErrorLike = {
		status: number;
		message: Error;
		cause: Error;
	};
}