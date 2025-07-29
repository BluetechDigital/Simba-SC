"use client";

// Imports
import {createContext, useContext} from "react";
import { IShopifyCollection } from "@/context/types/context";

export const ShopifyCollectionGlobalContext = createContext<IShopifyCollection.IContext | undefined>(
	undefined
);

export const useShopifyCollectionGlobalContext = () => {
	const content = useContext(ShopifyCollectionGlobalContext);

	if (content === undefined) {
		throw new Error(`Shopify Collection Global Context must be used to render content.`);
	}

	return content;
};
