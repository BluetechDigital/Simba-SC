export namespace IShopify {

	export type IExtractVariables<T> = T extends { variables: object } ? T["variables"] : never;

	export type IShopifyFetchFunction = <T>(options: {
	  cache?: RequestCache;
	  headers?: HeadersInit;
	  query: string;
	  tags?: string[];
	  variables?: IShopify.IExtractVariables<T>;
	}) => Promise<{ status: number; body: T } | never>;

	export type IMenu = {
		title: string;
		path: string;
	  };
	  
	  export type IShopifyMenuOperation = {
		data: {
		  menu?: {
			items: {
			  title: string;
			  url: string;
			}[];
		  };
		};
		variables: {
		  handle: string;
		};
	  };
	  
	  export type IMoney = {
		amount: string;
		currencyCode: string;
	  };
	  
	  export type IProductOption = {
		id: string;
		name: string;
		values: string[];
	  };
	  
	  export type IEdge<T> = {
		node: T;
	  };
	  
	  export type IConnection<T> = {
		edges: Array<IShopify.IEdge<T>>;
	  };
	  
	  export type IProductVariant = {
		id: string;
		title: string;
		availableForSale: boolean;
		selectedOptions: {
		  name: string;
		  value: string;
		}[];
		price: IShopify.IMoney;
	  };
	  
	  export type IImage = {
		url: string;
		altText: string;
		width: number;
		height: number;
	  };
	  
	  export type ISEO = {
		title: string;
		description: string;
	  };

	  export type IShopifyProduct = {
		id: string;
		handle: string;
		availableForSale: boolean;
		title: string;
		description: string;
		descriptionHtml: string;
		options: IShopify.IProductOption[];
		priceRange: {
		  maxVariantPrice: IShopify.IMoney;
		  minVariantPrice: IShopify.IMoney;
		};
		variants: IShopify.IConnection<IShopify.IProductVariant>;
		featuredImage: IShopify.IImage;
		images: IShopify.IConnection<IShopify.IImage>;
		seo: IShopify.ISEO;
		tags: string[];
		updatedAt: string;
		displayManufactureLogo: boolean;
		manufactureName: IShopify.IProductMetafield;
		manufactureLogo: IShopify.IProductMetafield;
		shippingDetails: IShopify.IProductMetafield;
		returnsExchanges: IShopify.IProductMetafield;
		additionalProductDetails: IShopify.IProductMetafield;
	};

	  export type IShopifyGridItemsProduct = {
		id: string;
		handle: string;
		availableForSale: boolean;
		title: string;
		priceRange: {
		  maxVariantPrice: IShopify.IMoney;
		  minVariantPrice: IShopify.IMoney;
		};
		featuredImage: IShopify.IImage;
	};
	
	  export type IProductMetafield = {
		id: string;
		type: string;
		value: string;
		namespace: string;
		updatedAt: string;
		reference: {
			id: string;
			mediaContentType: string;
			image: {
				url: string;
				altText: string;
				width: number;
				height: number;
			};
			sources: {
				url: string;
				format: string;
				mimeType: string;
			};
			previewImage: {
				url: string;
			};
		};
	  };
	
	  export type IProduct = Omit<IShopifyProduct, "variants" | "images"> & {
		variants: IShopify.IProductVariant[];
		images: IShopify.IImage[];
	  };
	  
	  export type IGetShopifyProducts = {
		query?: string;
		reverse?: boolean;
		sortKey?: string;
	  };
	  
	  export type IShopifyProductGridItem = {
		id: string;
		handle: string;
		title: string;
		availableForSale: boolean;
		priceRange: {
			maxVariantPrice: {
				amount: string;
				currencyCode: string;
			};
			minVariantPrice: {
				amount: string;
				currencyCode: string;
			};
		};
		featuredImage: IShopify.IImage | null;
		// No other fields like variants, description, metafields etc.
	};
	
	  export type IShopifyProductGridItemsOperation = {
		data: {
		  products: IShopify.IConnection<IShopify.IShopifyGridItemsProduct>;
		};
		variables: {
		  query?: string;
		  reverse?: boolean;
		  sortKey?: string;
		};
	  };

	  export type IShopifyProductsOperation = {
		data: {
		  products: IShopify.IConnection<IShopify.IShopifyProduct>;
		};
		variables: {
		  query?: string;
		  reverse?: boolean;
		  sortKey?: string;
		};
	  };
	  
	  export type IShopifyCollection = {
		handle: string;
		title: string;
		description: string;
		seo: IShopify.ISEO;
		updatedAt: string;
	  };
	  
	  export type ICollection = IShopifyCollection & {
		path: string;
	  };
	  
	  export type IShopifyCollectionsOperation = {
		data: {
		  collections: IShopify.IConnection<IShopify.IShopifyCollection>;
		};
	  };
	  
	  export type IGetCollectionProducts = {
		collection: string;
		reverse?: boolean;
		sortKey?: string;
	  };
	  
	  export type IShopifyCollectionProductsOperation = {
		data: {
		  collection: {
			products: IShopify.IConnection<IShopify.IShopifyProduct>;
		  };
		};
		variables: {
		  handle: string;
		  reverse?: boolean;
		  sortKey?: string;
		};
	  };
	  
	  export type IShopifyProductOperation = {
		data: { product: IShopify.IShopifyProduct };
		variables: {
		  handle: string;
		};
	  };
	  
	  export type ICartProduct = {
		id: string;
		handle: string;
		title: string;
		featuredImage: IShopify.IImage;
	  };
	  
	  export type ICartItem = {
		id: string | undefined;
		quantity: number;
		cost: {
		  totalAmount: IShopify.IMoney;
		};
		merchandise: {
		  id: string;
		  title: string;
		  selectedOptions: {
			name: string;
			value: string;
		  }[];
		  product: IShopify.ICartProduct;
		};
	  };
	  
	  export type IShopifyCart = {
		id: string | undefined;
		checkoutUrl: string;
		cost: {
		  subtotalAmount: IShopify.IMoney;
		  totalAmount: IShopify.IMoney;
		  totalTaxAmount: IShopify.IMoney;
		};
		lines: IShopify.IConnection<IShopify.ICartItem>;
		totalQuantity: number;
	  };
	  
	  export type IShopifyCartOperation = {
		data: {
		  cart: IShopify.IShopifyCart;
		};
		variables: {
		  cartId: string;
		};
	  };
	  
	  export type IShopifyCreateCartOperation = {
		data: { cartCreate: { cart: IShopify.IShopifyCart } };
	  };
	  
	  export type IShopifyUpdateCartOperation = {
		data: {
		  cartLinesUpdate: {
			cart: IShopify.IShopifyCart;
		  };
		};
		variables: {
		  cartId: string;
		  lines: {
			id: string;
			merchandiseId: string;
			quantity: number;
		  }[];
		};
	  };
	  
	  export type IShopifyRemoveFromCartOperation = {
		data: {
		  cartLinesRemove: {
			cart: IShopify.IShopifyCart;
		  };
		};
		variables: {
		  cartId: string;
		  lineIds: string[];
		};
	  };
	  
	  export type ICart = Omit<IShopifyCart, "lines"> & {
		lines: IShopify.ICartItem[];
	  };
	  
	  export type IShopifyAddToCartOperation = {
		data: {
		  cartLinesAdd: {
			cart: IShopify.IShopifyCart;
		  };
		};
		variables: {
		  cartId: string;
		  lines: {
			merchandiseId: string;
			quantity: number;
		  }[];
		};
	  };
	  
	  export type IShopifyProductRecommendationsOperation = {
		data: {
		  productRecommendations: IShopify.IShopifyProduct[];
		};
		variables: {
		  productId: string;
		};
	  };
	  
	  export type IPage = {
		id: string;
		title: string;
		handle: string;
		body: string;
		bodySummary: string;
		seo?: IShopify.ISEO;
		createdAt: string;
		updatedAt: string;
	  };
	  
	  export type IShopifyPageOperation = {
		data: { pageByHandle: IShopify.IPage };
		variables: { handle: string };
	  };
	  
	  export type IShopifyPagesOperation = {
		data: {
		  pages: IShopify.IConnection<IShopify.IPage>;
		};
	  };

	  export type IUpdateCart = {
		id: string;
		quantity: number;
		merchandiseId: string
	  }[];

	  export type IAddToCart = {
		quantity: number;
		merchandiseId: string;
	  }[];

	  export type IReshapeProduct = {
		  product: IShopify.IShopifyProduct;
		  filterHiddenProducts: boolean;
	  };
}