import { gql } from "graphql-request";

export const getProductMediaQuery = (id) => gql`
  query {
    product(id: "${id}") {
      title
      media(first: 5) {
        edges {
          node {
            ...fieldsForMediaTypes
          }
        }
      }
    }
  }

  fragment fieldsForMediaTypes on Media {
    alt
    mediaContentType
    preview {
      image {
        id
        altText
        originalSrc
      }
    }
    status
    ... on MediaImage {
      id
      image {
        altText
        originalSrc
      }
    }
  }
`;
