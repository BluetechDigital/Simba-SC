// Imports
import { headers } from "next/headers";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Constants
import {
  TAGS,
  SHOPIFY_GRAPHQL_API_ENDPOINT,
} from "@/lib/Constants/constants";

// Utils
import { ensureStartWith } from "@/lib/Utils/utils";

// TypeGuards
import { isShopifyError } from "@/lib/TypeGuards/type-guards";

// Shopify Types
import { IShopify } from "@/lib/shopify/types/types";

// Const Variables
const domain: string = process.env.SHOPIFY_STORE_DOMAIN ? ensureStartWith(process.env.SHOPIFY_STORE_DOMAIN, "https://") : "";
const endpoint: string = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key: string = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "";

// Get Shopify Fetch
export const shopifyFetch = async <T>({
    // cache = "force-cache",
    headers,
    query,
    tags,
    variables
  }: {
    // cache?: RequestCache;
    headers?: HeadersInit;
    query: string;
    tags?: string[];
    variables?: IShopify.IExtractVariables<T>;
  }): Promise<{ status: number; body: T } | never> => {
  
    // Ensure endpoint and key are available.
    if (!endpoint || !key) {
        const missing = [];
        if (!endpoint) missing.push('Shopify API Endpoint');
        if (!key) missing.push('Shopify Storefront Access Token');
        const errorMessage = `Missing Shopify API configuration: ${missing.join(', ')}. Please check your environment variables.`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
  
    try {
      const result = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": key,
          ...headers,
        },
        body: JSON.stringify({
          ...(query && { query }),
          ...(variables && { variables }),
        }),
        next: {
          tags: tags,
          revalidate: 60 // Revalidate every 60 seconds
        },
      });

      // Check for HTTP errors before trying to parse JSON
      if (!result.ok) {
          let errorBody = null;
          try {
              errorBody = await result.json();
          } catch (jsonError) {
              errorBody = await result.text();
          }
          const errorDetails = `HTTP Error: ${result.status} ${result.statusText}. Response body: ${JSON.stringify(errorBody)}`;
          console.error(errorDetails);
          throw new Error(`Shopify fetch failed with HTTP status ${result.status}: ${errorDetails}`);
      }
  
      const body = await result.json();
  
      // Shopify GraphQL errors are often in body.errors
      if (body.errors && body.errors.length > 0) {
          const graphqlError = body.errors[0];
          const errorMessage = `Shopify GraphQL Error: ${graphqlError.message} (Path: ${graphqlError.path}, Extensions: ${JSON.stringify(graphqlError.extensions)})`;
          console.error(errorMessage);
          throw new Error(errorMessage);
      }
  
      return {
        status: result.status,
        body,
      };
      
    } catch (error: unknown) {

      console.error("Caught error in shopifyFetch:", JSON.stringify(error, null, 2));
      
      let customError: { cause?: string; status?: number; message: string; query?: string };

      if (isShopifyError(error)) {
        throw {
          cause: error.cause?.toString() || "unknown",
          status: error.status || 500,
          message: error.message,
          query,
        };
      }

      if (error instanceof Error) {
          customError = {
              message: error.message,
              cause: error.cause?.toString() || 'unknown',
          };
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
          customError = {
              message: (error as any).message,
              cause: (error as any).cause?.toString() || 'unknown',
              status: (error as any).status,
              query: (error as any).query,
          };
      } else {
          customError = { message: `An unknown error occurred during Shopify fetch: ${String(error)}` };
      }
  
      throw {
          ...customError,
          query,
          message: customError.message || "Something went wrong trying to fetch Shopify data",
      };
    }
  };

// Get Remove Edges And Nodes
export const removeShopifyEdgesAndNodes = <T>(array: IShopify.IConnection<T>): T[] => {
    try {
      return array.edges.map((edge: any) => edge?.node);
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to remove edges and nodes"
      );
    }
  };

// Get Shopify Reshape Images
export const reshapeShopifyImages = (images: IShopify.IConnection<IShopify.IImage>, productTitle: string) => {
    try {
      const flattened = removeShopifyEdgesAndNodes(images);

      return flattened.map((image) => {
        const filename = image.url.match(/.*\/(.*)\..*/)?.[1];

        return {
          ...image,
          altText: image.altText || `${productTitle} - ${filename}`,
        };
      });
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        "Something went wrong trying to reshape images"
      );
    }
  };

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export const revalidate = async (req: NextRequest): Promise<NextResponse> => {
  try {
    // We always need to respond with a 200 status code to Shopify,
    // otherwise it will continue to retry the request.
    const collectionWebhooks = [
      "collections/create",
      "collections/delete",
      "collections/update",
    ];

    const productWebhooks = [
      "products/create",
      "products/delete",
      "products/update",
    ];

    const topic = (await headers()).get("x-shopify-topic") || "unknown";
    const secret = req.nextUrl.searchParams.get("secret");
    const isCollectionUpdate = collectionWebhooks.includes(topic);
    const isProductUpdate = productWebhooks.includes(topic);

    if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
      console.error("Invalid revalidation secret.");
      return NextResponse.json({ status: 200 });
    }

    if (!isCollectionUpdate && !isProductUpdate) {
      // We don't need to revalidate anything for any other topics.
      return NextResponse.json({ status: 200 });
    }

    if (isCollectionUpdate) {
      revalidateTag(TAGS.collections);
    }

    if (isProductUpdate) {
      revalidateTag(TAGS.products);
    }

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying revalidate"
    );
  }
};