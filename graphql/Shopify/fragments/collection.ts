// Imports
import seoFragment from "@/graphql/Shopify/fragments/seo";

// Get Collection Fragment Query
export const collectionFragment = /* GraphQl */ ` 
    fragment collection on Collection {
      handle
      title
      description
      seo {
        ...seo
      }
      updatedAt
    }
    ${seoFragment}
`;