// Imports
import { IConstantsTypes } from "@/lib/Constants/types/types";

export const TAGS: IConstantsTypes.ITags = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const defaultSort: IConstantsTypes.ISortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: "RELEVANCE",
  reverse: false,
};

export const sorting: IConstantsTypes.ISortFilterItem[] = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];

export const HIDDEN_PRODUCT_TAG: string = "nextjs-frontend-hidden";
export const DEFAULT_OPTION: string = "Default Title";
export const SHOPIFY_GRAPHQL_API_ENDPOINT: string = "/api/2024-07/graphql.json";
