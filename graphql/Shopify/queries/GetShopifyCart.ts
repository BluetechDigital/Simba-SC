// Imports
import { cookies, headers } from 'next/headers';
import { TAGS } from "@/lib/Constants/constants";
import { IShopify } from "@/lib/shopify/types/types";
import { removeShopifyEdgesAndNodes, shopifyFetch } from "@/lib/shopify";

// Shopify Mutations 
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "@/graphql/Shopify/mutations/GetShopifyCart";

// Fragments
import { productFragment } from "@/graphql/Shopify/fragments/product";

// Get Reshape Cart
const reshapeCart = (cart: IShopify.IShopifyCart): IShopify.ICart => {
  try {
    if (!cart.cost?.totalTaxAmount) {
      cart.cost.totalTaxAmount = {
        amount: "0.0",
        currencyCode: "USD",
      };
    }
  
    return {
      ...cart,
      lines: removeShopifyEdgesAndNodes(cart.lines),
    };
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying to fetch reshape cart"
    );
  }
};

// Get Create Cart
export const createCart = async (): Promise<IShopify.ICart> => {
  try {
    const response = await shopifyFetch<IShopify.IShopifyCreateCartOperation>({
      query: createCartMutation,
      // cache: "no-store",
    });
  
    return reshapeCart(response.body.data.cartCreate.cart);
  } catch (error: unknown) {
    console.log(error);
    throw new Error(
      "Something went wrong trying to fetch creating cart"
    );
  }
};

// Get Cart
export const getCart = async (): Promise<IShopify.ICart | undefined> => {
    const cartId: string | undefined = (await cookies()).get('cartId')?.value;

    if (!cartId) return undefined;

    // Get Cart Fragment Query
    const cartFragment = /* GraphQL */ `
      fragment cart on Cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  product {
                    ...product
                  }
                }
              }
            }
          }
        }
        totalQuantity
      }
      ${productFragment}
    `;

    // Get Cart Query
    const getCartQuery: string = /* GraphQL */ `
      query getCart($cartId: ID!) {
        cart(id: $cartId) {
          ...cart
        }
      }
      ${cartFragment}
    `;

    const response = await shopifyFetch<IShopify.IShopifyCartOperation>({
      query: getCartQuery,
      variables: { cartId },
      tags: [TAGS.cart],
    });
  
    // old carts becomes 'null' when you checkout
    if (!response.body.data.cart) {
      return undefined;
    }
  
    return reshapeCart(response.body.data.cart);
};

// Remove From Cart
export const removeFromCart = async (
  lineIds: string[]
): Promise<IShopify.ICart> => {
  
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const cartId = (await cookies()).get('cartId')?.value!;

  const response = await shopifyFetch<IShopify.IShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    }
  });

  return reshapeCart(response.body.data.cartLinesRemove.cart);
};

// Update Cart
export const updateCart = async (
  lines: IShopify.IUpdateCart
): Promise<IShopify.ICart> => {

  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const cartId = (await cookies()).get('cartId')?.value!;
  
  const response = await shopifyFetch<IShopify.IShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines
    }
  });

  return reshapeCart(response.body.data.cartLinesUpdate.cart);
};

// Add To Cart
export const addToCart = async (
  lines: IShopify.IAddToCart
): Promise<IShopify.ICart> => {
  
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const cartId: string | undefined = (await cookies()).get('cartId')?.value!;

    const response = await shopifyFetch<IShopify.IShopifyAddToCartOperation>({
      query: addToCartMutation,
      variables: {
        cartId,
        lines,
      }
    });
  
    return reshapeCart(response.body.data.cartLinesAdd.cart);
};