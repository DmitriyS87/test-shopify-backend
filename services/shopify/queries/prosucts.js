import { request, gql } from 'graphql-request';

export const getProductsQuery = ({firstProducts, firstImages }) => gql`
  {
      products(first: ${firstProducts}) {
        edges {
            cursor,
            node {
              id,	
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
  }
`;

/*

{
    "data": {
        "products": {
            "edges": [
                {
                    "cursor": "eyJsYXN0X2lkIjo3ODUzNzQ0ODE2MzA2LCJsYXN0X3ZhbHVlIjoiNzg1Mzc0NDgxNjMwNiJ9",
                    "node": {
                        "id": "gid://shopify/Product/7853744816306",
                        "description": "SKULatching Switches - Choose a switch Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)Latching Switches - Choose a color Green (8)CABLES - _1_0_0 Choice 1CABLES - _1_1_1 NOMomentary Switches - Choose a switch Aluminum Illuminated Halo Ring SPDT 12V Pushbutton SwitchMomentary Switches - Choose a Color Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illuminationATC FUSES - Choose a Fuse Assorted illumination glow fuses 12V ATC automotiveATC FUSES - Choose a Product 15A Blue ATC Glow FuseCustom Acrylic Option - Purple-Mirror-Acrylic-RBX-4CHbase_priceis_calculated trueconfigId -afmAdvpRxrB3hQOTJ8uNms _image https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png View - Back https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.pngView - Front https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png Text - RMBG123 Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.pngBeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpgimageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.pngproductUrl https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product",
                        "descriptionHtml": "<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>\n<p><strong data-mce-fragment=\"1\">_image</strong><span data-mce-fragment=\"1\"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>\n<p><strong data-mce-fragment=\"1\">View - Back</strong><span data-mce-fragment=\"1\"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">View - Front</strong><span data-mce-fragment=\"1\"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>\n<p><strong data-mce-fragment=\"1\">Text - RMBG123</strong><span data-mce-fragment=\"1\"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>",
                        "featuredImage": {
                            "id": "gid://shopify/ProductImage/36678655574194",
                            "url": "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054",
                            "width": 721,
                            "height": 841,
                            "altText": null
                        },
                        "images": {
                            "nodes": [
                                {
                                    "url": "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054",
                                    "id": "gid://shopify/ProductImage/36678655574194"
                                }
                            ],
                            "pageInfo": {
                                "hasNextPage": false,
                                "hasPreviousPage": false,
                                "startCursor": "eyJsYXN0X2lkIjoyOTE0MzM2OTg0Mjg2NiwibGFzdF92YWx1ZSI6IjEifQ==",
                                "endCursor": "eyJsYXN0X2lkIjoyOTE0MzM2OTg0Mjg2NiwibGFzdF92YWx1ZSI6IjEifQ=="
                            }
                        }
                    }
                },
                {
                    "cursor": "eyJsYXN0X2lkIjo3ODUzNzQ0ODQ5MDc0LCJsYXN0X3ZhbHVlIjoiNzg1Mzc0NDg0OTA3NCJ9",
                    "node": {
                        "id": "gid://shopify/Product/7853744849074",
                        "description": "DEMO - X-Box Controller | Rendered Images for each color SKULatching Switches - Choose a switch Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)Latching Switches - Choose a color Green (8)CABLES - _1_0_0 Choice 1CABLES - _1_1_1 NOMomentary Switches - Choose a switch Aluminum Illuminated Halo Ring SPDT 12V Pushbutton SwitchMomentary Switches - Choose a Color Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illuminationATC FUSES - Choose a Fuse Assorted illumination glow fuses 12V ATC automotiveATC FUSES - Choose a Product 15A Blue ATC Glow FuseCustom Acrylic Option - Purple-Mirror-Acrylic-RBX-4CHbase_priceis_calculated trueconfigId -afmAdvpRxrB3hQOTJ8uNms _image https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png View - Back https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.pngView - Front https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png Text - RMBG123 Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.pngBeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpgimageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.pngproductUrl https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product",
                        "descriptionHtml": "<p>DEMO - X-Box Controller | Rendered Images for each color</p>\n<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>\n<p><strong data-mce-fragment=\"1\">_image</strong><span data-mce-fragment=\"1\"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>\n<p><strong data-mce-fragment=\"1\">View - Back</strong><span data-mce-fragment=\"1\"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">View - Front</strong><span data-mce-fragment=\"1\"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>\n<p><strong data-mce-fragment=\"1\">Text - RMBG123</strong><span data-mce-fragment=\"1\"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>",
                        "featuredImage": {
                            "id": "gid://shopify/ProductImage/36678655606962",
                            "url": "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/customproductbuilder-11130041100-fAUnuygKRKLfEXSEoMYS18G.png?v=1699438054",
                            "width": 1400,
                            "height": 788,
                            "altText": null
                        },
                        "images": {
                            "nodes": [
                                {
                                    "url": "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/customproductbuilder-11130041100-fAUnuygKRKLfEXSEoMYS18G.png?v=1699438054",
                                    "id": "gid://shopify/ProductImage/36678655606962"
                                }
                            ],
                            "pageInfo": {
                                "hasNextPage": false,
                                "hasPreviousPage": false,
                                "startCursor": "eyJsYXN0X2lkIjoyOTE0MzM2OTg3NTYzNCwibGFzdF92YWx1ZSI6IjEifQ==",
                                "endCursor": "eyJsYXN0X2lkIjoyOTE0MzM2OTg3NTYzNCwibGFzdF92YWx1ZSI6IjEifQ=="
                            }
                        }
                    }
                }
            ],
            "pageInfo": {
                "hasNextPage": true,
                "hasPreviousPage": false,
                "startCursor": "eyJsYXN0X2lkIjo3ODUzNzQ0ODE2MzA2LCJsYXN0X3ZhbHVlIjoiNzg1Mzc0NDgxNjMwNiJ9",
                "endCursor": "eyJsYXN0X2lkIjo3ODUzNzQ0ODQ5MDc0LCJsYXN0X3ZhbHVlIjoiNzg1Mzc0NDg0OTA3NCJ9"
            }
        }
    },
    "extensions": {
        "cost": {
            "requestedQueryCost": 30,
            "actualQueryCost": 12,
            "throttleStatus": {
                "maximumAvailable": 1000,
                "currentlyAvailable": 988,
                "restoreRate": 50
            }
        }
    }
}

*/