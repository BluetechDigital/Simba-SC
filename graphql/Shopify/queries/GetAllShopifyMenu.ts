// Imports
import { shopifyFetch } from "@/lib/shopify";
import { TAGS } from "@/lib/Constants/constants";
import { ensureStartWith } from "@/lib/Utils/utils";
import { IShopify } from "@/lib/shopify/types/types";

// Const Variables
const domain: string = process.env.SHOPIFY_STORE_DOMAIN ? ensureStartWith(process.env.SHOPIFY_STORE_DOMAIN, "https://") : "";

// Get Shopify Menu
export const getAllShopifyMenu = async (handle: string): Promise<IShopify.IMenu[]> => {
    try {

      const getMenuQuery: string = /* GraphQL */ `
        query getMenu($handle: String!) {
          menu(handle: $handle) {
            items {
              title
              url
            }
          }
        }
      `;
      
      const response = await shopifyFetch<IShopify.IShopifyMenuOperation>({
        query: getMenuQuery,
        tags: [TAGS.collections],
        variables: {
          handle,
        },
      });
    
      return (
        response.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
          title: item.title,
          path: item.url
            .replace(domain, "")
            .replace("/collections", "/search")
            .replace("/pages", ""),
        })) || []
      );
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to fetch shopify menu links content"
      );
    }
  };


  