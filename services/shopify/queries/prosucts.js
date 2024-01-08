import { gql } from 'graphql-request';

export const getProductsQuery = (firstProducts, firstImages) => gql`
{
    products(first: ${firstProducts}) {
      edges {
          cursor,
          node {
            id,
            title,
            tags,
            status,
            vendor,
            updatedAt,
            seo {
              description
              title
              },
            productType,
            collections(first: 10) {
              edges {
                node {
                  id,
                  title
                      }
                  }
              },
            description,
            descriptionHtml,
            featuredImage {
              id,
              url,
              width,
              height,
              altText
              },
            images(first: ${firstImages}) {
              nodes {
                url,
                id
                  },
              pageInfo {
                hasNextPage,
                hasPreviousPage,
                startCursor,
                endCursor
                  },
              }
          }
      },
        pageInfo {
          hasNextPage,
          hasPreviousPage,
          startCursor,
          endCursor
      }
    },
}`;
