import { sanitizeHTML } from "./sanitize.js";

export function transformShopifyProduct(graphqlData) {
  function decodeEdge({ node }) {
    return {
      name: node.title,
      shopify_id: node.id,
      html: node.descriptionHtml,
      status: node.status,
      type: node.productType,
      description: node.description,
      img_url: node.images.nodes[0].url,
      img_id: node.images.nodes[0].url,
    };
  }
  const products = graphqlData.data.products.edges || [];
  return products.map(decodeEdge);
}

export function sanitizeProduct(product) {
  const { name, shopify_id, html, status, type, description, img_url, img_id } =
    product;
  return {
    name,
    shopify_id,
    html: sanitizeHTML(html),
    status,
    type,
    description,
    img_url,
    img_id,
  };
}
