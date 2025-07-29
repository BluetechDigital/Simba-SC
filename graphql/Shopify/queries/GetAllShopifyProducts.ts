// Imports
import { IShopify } from "@/lib/shopify/types/types";
import { TAGS, HIDDEN_PRODUCT_TAG } from "@/lib/Constants/constants";
import { shopifyFetch, reshapeShopifyImages, removeShopifyEdgesAndNodes } from "@/lib/shopify";

// Fragments
import { productFragment, productGridItemFragment } from "@/graphql/Shopify/fragments/product";

// Get Shopify Reshape Product
const reshapeShopifyProduct = (product: IShopify.IShopifyProduct, filterHiddenProducts: boolean = true) => {
    try {
      if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
        // Log if a product is being skipped due to being null/undefined or hidden
        if (!product) {
            console.warn("Skipping null/undefined product in reshapeShopifyProduct.");
        } else if (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG)) {
            console.info(`Skipping hidden product: ${product.handle}`);
        }
        return undefined;
      }

      const { images, variants, ...rest } = product;

      // Add validation before calling sub-reshaping functions if product.images or product.variants could be bad
      if (!images || typeof images !== 'object' || !variants || typeof variants !== 'object') {
          const errorMessage = `Malformed product data for product handle '${product.handle}': images or variants are invalid.`;
          console.error(errorMessage, "Problematic product:", JSON.stringify(product, null, 2));
          throw new Error(errorMessage);
      }

      // Call sub-reshaping functions, ensure their errors are properly handled (they should be now)
      const reshapedImages = reshapeShopifyImages(images, product.title);
      const reshapedVariants = removeShopifyEdgesAndNodes(variants);

      // Add validation for the results of sub-reshaping functions
      if (!Array.isArray(reshapedImages)) {
          const errorMessage = `reshapeShopifyImages did not return an array for product handle '${product.handle}'.`;
          console.error(errorMessage, "Reshaped images result:", JSON.stringify(reshapedImages, null, 2));
          throw new Error(errorMessage);
      }
      if (!Array.isArray(reshapedVariants)) {
          const errorMessage = `removeShopifyEdgesAndNodes did not return an array for product handle '${product.handle}' variants.`;
          console.error(errorMessage, "Reshaped variants result:", JSON.stringify(reshapedVariants, null, 2));
          throw new Error(errorMessage);
      }


      return {
        ...rest,
        images: reshapedImages,
        variants: reshapedVariants,
      }
    } catch (error: unknown) {
      // *** THIS IS THE CRITICAL CHANGE ***
      // Log the full error object and the specific product that caused the issue
      console.error("Error in reshapeShopifyProduct:", JSON.stringify(error, null, 2), "Problematic product:", JSON.stringify(product, null, 2));
      throw new Error(
        `Something went wrong trying to reshape product: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

// Get Shopify Reshape Products
export const reshapeShopifyProducts = (products: IShopify.IShopifyProduct[]) => {
    try {
      const reshapedProducts: any[] = [];

      for (const product of products) {
        if (product) {
          const reshapedProduct = reshapeShopifyProduct(product);

          if (reshapedProduct) {
            reshapedProducts.push(reshapedProduct);
          }
        }
      }

      return reshapedProducts;
  
    } catch (error: unknown) {
      console.error("Error in reshapeShopifyProducts:", JSON.stringify(error, null, 2));
      throw new Error(
        "Something went wrong trying to reshape products"
      );
    }
  };

// Get Shopify Products
export const getShopifyProducts =
  async ({ query, reverse, sortKey } : IShopify.IGetShopifyProducts): Promise<IShopify.IProduct[]> => {
    try {
      // Get Products Query
      const getShopifyProductsQuery: string = /* GraphQL */ `
        query getShopifyProducts(
          $sortKey: ProductSortKeys
          $reverse: Boolean
          $query: String
        ) {
          products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
            edges {
              node {
                ...product
              }
            }
          }
        }
        ${productFragment}
      `;
      
      const response = await shopifyFetch<IShopify.IShopifyProductsOperation>({
        query: getShopifyProductsQuery,
        tags: [TAGS.products],
        variables: {
          query,
          reverse,
          sortKey,
        },
      });
    
      // return reshapeShopifyProducts(removeShopifyEdgesAndNodes(response.body.data.products));
      return reshapeShopifyProducts(removeShopifyEdgesAndNodes(response.body.data.products));
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to fetch shopify products content"
      );
    }
  };

// Get Shopify Product
export const getShopifyProduct = async (handle: string): Promise<IShopify.IProduct | undefined> => {
  try {
    // Get Product Query
    const getShopifyProductQuery = /* GraphQL */ `
      query getShopifyProduct($handle: String!) {
        product(handle: $handle) {
          ...product
        }
      }
      ${productFragment}
    `;
    
    const response = await shopifyFetch<IShopify.IShopifyProductOperation>({
      query: getShopifyProductQuery,
      tags: [TAGS.products],
      variables: {
        handle,
      },
    });
    return reshapeShopifyProduct(response.body.data.product, false);
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying to fetch shopify product content"
    );
  }
};


// SEARCH PAGE //

// Get Shopify Reshape Search Page Product
const reshapeShopifySearchPageProduct = (product: IShopify.IShopifyGridItemsProduct) => {
    try {
      if (!product) {
        // Log if a product is being skipped due to being null/undefined or hidden
        console.warn("Skipping null/undefined product in reshapeShopifyProduct.");
        return undefined;
      }

      const {...rest } = product;

      return {
        ...rest,
      }
    } catch (error: unknown) {
      // *** THIS IS THE CRITICAL CHANGE ***
      // Log the full error object and the specific product that caused the issue
      console.error("Error in reshapeShopifyProduct:", JSON.stringify(error, null, 2), "Problematic product:", JSON.stringify(product, null, 2));
      throw new Error(
        `Something went wrong trying to reshape product: ${error instanceof Error ? error.message : String(error)}`
      );
    }
};
  
// Get Shopify Reshape Search Page Products
export const reshapeShopifySearchPageProducts = (products: IShopify.IShopifyGridItemsProduct[]) => {
    try {
      const reshapedProducts: any[] = [];

      for (const product of products) {
        if (product) {
          const reshapedProduct = reshapeShopifySearchPageProduct(product);

          if (reshapedProduct) {
            reshapedProducts.push(reshapedProduct);
          }
        }
      }

      return reshapedProducts;
  
    } catch (error: unknown) {
      console.error("Error in reshapeShopifyProducts:", JSON.stringify(error, null, 2));
      throw new Error(
        "Something went wrong trying to reshape products"
      );
    }
  };

// Get Shopify Products Search Page Grid View
export const getShopifyProductsSearchPageGridView = async ({
  query,
  reverse,
  sortKey,
}: IShopify.IGetShopifyProducts): Promise<IShopify.IShopifyProductGridItem[]> => {
  
  try {
    // GraphQL Query: Similar to getShopifyProducts, but uses productGridItemFragment
    // Get Products Query
      const getShopifyProductsSearchQuery: string = /* GraphQL */ `
        query getShopifyProductsSearchPageGridView(
          $sortKey: ProductSortKeys
          $reverse: Boolean
          $query: String
        ) {
          products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
            edges {
              node {
                ...productGridItem
              }
            }
          }
        }
        ${productGridItemFragment}
      `;

    // Perform a single fetch, similar to getShopifyProducts=
    const response = await shopifyFetch<IShopify.IShopifyProductGridItemsOperation>({
        query: getShopifyProductsSearchQuery,
        tags: [TAGS.products],
        variables: {
          query,
          reverse,
          sortKey,
        },
    });
    
    return reshapeShopifySearchPageProducts(removeShopifyEdgesAndNodes(response.body.data.products));
  } catch (error: unknown) {
    console.error("Error in getShopifyProductsSearchPageGridView:", error);
    throw new Error(
      `Something went wrong trying to fetch Shopify products for search grid: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
};

// Get Shopify Product Recommendations
export const getAllShopifyProductRecommendations = async (productId: string): Promise<IShopify.IProduct[]> => {
  try {
    // Get Product Recommendations Query
    const getShopifyProductRecommendationsQuery: string = /* GraphQL */ `
      query getAllShopifyProductRecommendations($productId: ID!) {
        productRecommendations(productId: $productId) {
          ...product
        }
      }
      ${productFragment}
    `;
    
    const response = await shopifyFetch<IShopify.IShopifyProductRecommendationsOperation>({
      query: getShopifyProductRecommendationsQuery,
      tags: [TAGS.products],
      variables: {
        productId,
      },
    });
  
    return reshapeShopifyProducts(response.body.data.productRecommendations);
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying to fetch shopify product recommendations content"
    );
  }
};