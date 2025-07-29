// Imports
import { TAGS } from "@/lib/Constants/constants";
import { IShopify } from "@/lib/shopify/types/types";
import { shopifyFetch, removeShopifyEdgesAndNodes } from "@/lib/shopify";
import { reshapeShopifyProducts, reshapeShopifySearchPageProducts } from "@/graphql/Shopify/queries/GetAllShopifyProducts";

// Fragments
import { productFragment, productGridItemFragment } from "@/graphql/Shopify/fragments/product";
import { collectionFragment } from "@/graphql/Shopify/fragments/collection";
  
// Get Reshape Collection
const reshapeShopifyCollection = (collection: IShopify.IShopifyCollection): IShopify.ICollection | undefined => {
  if (!collection) return undefined;

  return {
    ...collection,
    path: `/search/${collection.handle}`,
  };
};

// Get Reshape Collections
const reshapeAllShopifyCollections = (collections: IShopify.IShopifyCollection[]) => {
  const reshapedCollections: any[] = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeShopifyCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

// Get Shopify Collections
export const getShopifyCollections = async (): Promise<IShopify.ICollection[]> => {
  try {
    // Get Collection Query
    const getCollectionsQuery: string = /* GraphQL */ `
      query getCollections {
        collections(first: 100, sortKey: TITLE) {
          edges {
            node {
              ...collection
            }
          }
        }
      }
      ${collectionFragment}
    `;
    
      const response = await shopifyFetch<IShopify.IShopifyCollectionsOperation>({
        query: getCollectionsQuery,
        tags: [TAGS.collections],
      });
    
      const shopifyCollections: IShopify.IShopifyCollection[] = removeShopifyEdgesAndNodes(response?.body?.data?.collections);
      const collections: any[] = [
        {
          handle: "",
          title: "All",
          description: "All products",
          seo: {
            title: "All",
            description: "All products",
          },
          path: "/search",
          updatedAt: new Date().toISOString(),
        },
        // Filter out the hidden products
        ...reshapeAllShopifyCollections(shopifyCollections).filter(
          (collection) => !collection.handle.startsWith("hidden")
        ),
      ];
    
      return collections;
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to fetch shopify collections content"
      );
    }
  };

// Get Shopify Collections Products
export const getAllShopifyCollectionProducts = async ({ collection, reverse, sortKey }: IShopify.IGetCollectionProducts): Promise<IShopify.IProduct[]> => {
  try {
    // Get Collection Products Query
    const getCollectionProductsQuery: string = /* GraphQL */ `
      query getCollectionProducts(
        $handle: String!
        $sortKey: ProductCollectionSortKeys
        $reverse: Boolean
      ) {
        collection(handle: $handle) {
          products(sortKey: $sortKey, reverse: $reverse, first: 100) {
            edges {
              node {
                ...product
              }
            }
          }
        }
      }
      ${productFragment}
    `;
    
    const response = await shopifyFetch<IShopify.IShopifyCollectionProductsOperation>({
      query: getCollectionProductsQuery,
      tags: [TAGS.collections, TAGS.products],
      variables: {
        handle: collection,
        reverse,
        sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
      },
    });
  
    if (!response.body.data.collection) {
      console.log(`No collection found for \`${collection}\``);
      return [];
    }
  
    return reshapeShopifyProducts(removeShopifyEdgesAndNodes(response.body.data.collection.products));
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying to fetch shopify collections products content"
    );
  }
};


// COLLECTIONS SEARCH PAGE //
// Get Shopify Collection Search Page Products
export const getAllShopifyCollectionSearchPageGridView = async ({
  collection,
  reverse,
  sortKey
}: IShopify.IGetCollectionProducts): Promise<IShopify.IShopifyProductGridItem[]> => {
  try {
    // Get Collection Products Query
    const getCollectionProductsQuery: string = /* GraphQL */ `
      query getCollectionSearchPageProducts(
        $handle: String!
        $sortKey: ProductCollectionSortKeys
        $reverse: Boolean
      ) {
        collection(handle: $handle) {
          products(sortKey: $sortKey, reverse: $reverse, first: 100) {
            edges {
              node {
                ...productGridItem
              }
            }
          }
        }
      }
      ${productGridItemFragment}
    `;
    
    const response = await shopifyFetch<IShopify.IShopifyCollectionProductsOperation>({
      query: getCollectionProductsQuery,
      tags: [TAGS.collections, TAGS.products],
      variables: {
        handle: collection,
        reverse,
        sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
      },
    });
  
    if (!response.body.data.collection) {
      console.log(`No collection found for \`${collection}\``);
      return [];
    }
  
    return reshapeShopifySearchPageProducts(removeShopifyEdgesAndNodes(response.body.data.collection.products));
  } catch (error: unknown) {
    console.error("Error in getAllShopifyCollectionSearchPageGridView:", error);
    throw new Error(
      "Something went wrong trying to fetch shopify collections search page products content"
    );
  }
};