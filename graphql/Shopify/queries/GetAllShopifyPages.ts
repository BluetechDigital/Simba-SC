// Imports
import { IShopify } from "@/lib/shopify/types/types";
import { removeShopifyEdgesAndNodes, shopifyFetch } from "@/lib/shopify";

// Fragments
import seoFragment from "@/graphql/Shopify/fragments/seo";

// Page Fragment
const pageFragment: string = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${seoFragment}
`;

// Get Shopify Page
export const getShopifyPage = async (handle: string): Promise<IShopify.IPage> => {
  try {
    // Get Page Query
    const getPageQuery: string = /* GraphQL */ `
      query getPage($handle: String!) {
        pageByHandle(handle: $handle) {
          ...page
        }
      }
      ${pageFragment}
    `;
    
    const response = await shopifyFetch<IShopify.IShopifyPageOperation>({
      query: getPageQuery,
      // cache: "no-store",
      variables: { handle },
    });
  
    return response.body.data.pageByHandle;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying get shopify page"
    );
  }
};

// Get Shopify Pages
export const getAllShopifyPages = async (): Promise<IShopify.IPage[]> => {
  try {
    // Get Pages Query
    const getPagesQuery: string = /* GraphQL */ `
      query getPages {
        pages(first: 100) {
          edges {
            node {
              ...page
            }
          }
        }
      }
      ${pageFragment}
    `;
    
    const response = await shopifyFetch<IShopify.IShopifyPagesOperation>({
      query: getPagesQuery,
      // cache: "no-store",
    });
  
    return removeShopifyEdgesAndNodes(response.body.data.pages);
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying get shopify page"
    );
  }
};