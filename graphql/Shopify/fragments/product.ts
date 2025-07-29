// Imports
import imageFragment from "@/graphql/Shopify/fragments/image";
import seoFragment from "@/graphql/Shopify/fragments/seo";

// Full Product Content
export const productFragment = /* GraphQl */ ` 
    fragment product on Product {
      id
      handle
      availableForSale
      title
      description
      descriptionHtml
      options {
        id
        name
        values
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            availableForSale
            selectedOptions {
              name
              value
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
      featuredImage {
        ...image
      }
      images(first: 20) {
        edges {
          node {
            ...image
          }
        }
      }
      seo {
        ...seo
      }
      tags
      updatedAt
      manufactureName: metafield(namespace: "custom", key: "manufacture_name") {
        id
        type
        value
        namespace
        updatedAt
        reference
      }
      displayManufactureLogo: metafield(namespace: "custom", key: "display_manufacture_logo") {
        id
        type
        value
        namespace
        updatedAt
        reference
      }
      manufactureLogo: metafield(namespace: "custom", key: "manufacture_logo") {
        id
        type
        value
        namespace
        updatedAt
        reference {
          ... on MediaImage {
            id
            mediaContentType
            image {
              url
              width
              height
              altText
            }
          }
          ... on Video {
            id
            mediaContentType
            previewImage {
              url
            }
            sources {
              url
              format
              mimeType
            }
          }
        }
      }
      additionalProductDetails: metafield(namespace: "custom", key: "additional_product_details") {
        id
        namespace
        value
        type
        updatedAt
        reference
      }
      shippingDetails: metafield(namespace: "custom", key: "shipping_details") {
        id
        type
        value
        namespace
        updatedAt
        reference
      }
      returnsExchanges: metafield(namespace: "custom", key: "returns_exchanges") {
        id
        type
        value
        namespace
        updatedAt
        reference
      }
    }
    ${imageFragment}
    ${seoFragment}
`;

/* SEARCH PAGE: Product Grid 

(GraphQL fragment specifically targets the
minimal data required for displaying products
in a grid or list view on a search results page.)

# Do NOT include:
    # description
    # descriptionHtml
    # options
    # variants (fetch only when product page is loaded)
    # images (only featuredImage for grid)
    # seo
    # tags
    # updatedAt
    # ALL custom metafields (manufactureName, displayManufactureLogo, manufactureLogo, additionalProductDetails, shippingDetails, returnsExchanges)

    # Do NOT include:
    # ${seoFragment} (SEO is for the full product page, not the grid item)

*/
export const productGridItemFragment = /* GraphQl */ ` 
    fragment productGridItem on Product {
      id
      handle
      availableForSale
      title
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        ...image
      }
      seo {
        ...seo
      }
    }
    ${imageFragment}
    ${seoFragment}
`;