"use client";

// Imports
import { FC, memo } from "react";
import { IShopifyCollection } from "@/context/types/context";
import { ShopifyCollectionGlobalContext } from "@/context/shopifyCollectionGlobal";

const ShopifyCollectionGlobalContextProvider: FC<IShopifyCollection.IContextProvider> = memo(({
	children,
	shopifyCollectionGlobalProps,
}) => {
	return (
		<ShopifyCollectionGlobalContext.Provider
			value={{
				// Website Links
				businessWebsiteShopifyCollectionContent: shopifyCollectionGlobalProps.businessWebsiteShopifyCollectionContent,
			}}
		>
			{children}
		</ShopifyCollectionGlobalContext.Provider>
	);
});

ShopifyCollectionGlobalContextProvider.displayName = 'ShopifyCollectionGlobalContextProvider';

export default ShopifyCollectionGlobalContextProvider;
