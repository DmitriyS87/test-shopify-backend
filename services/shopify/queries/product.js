import { request, gql } from 'graphql-request';

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


/* 

{
    "data": {
        "product": {
            "title": "Demo T-Shirt | Automatic recoloring | Out of stock | test product",
            "media": {
                "edges": [
                    {
                        "node": {
                            "alt": "",
                            "mediaContentType": "IMAGE",
                            "preview": {
                                "image": {
                                    "id": "gid://shopify/ImageSource/29149179838642",
                                    "altText": "",
                                    "originalSrc": "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054"
                                }
                            },
                            "status": "READY",
                            "id": "gid://shopify/MediaImage/29143369842866",
                            "image": {
                                "altText": "",
                                "originalSrc": "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054"
                            }
                        }
                    }
                ]
            }
        }
    },
    "extensions": {
        "cost": {
            "requestedQueryCost": 23,
            "actualQueryCost": 7,
            "throttleStatus": {
                "maximumAvailable": 1000,
                "currentlyAvailable": 993,
                "restoreRate": 50
            }
        }
    }
}

*/