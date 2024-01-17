import {
  sanitizeProduct,
  transformShopifyProduct,
} from "../helpers/product.js";
import productService from "./productService.js";
import ShopifyService from "./shopify/shopify.js";

const syncDataWithExternalServer = async () => {
  try {
    const products = await ShopifyService.getProducts();
    return await addShopifyProducts(products);
  } catch (error) {
    throw new Error(`Error syncing data: ${error}`);
  }
};

async function addShopifyProducts(graphqlData) {
  const products = transformShopifyProduct(graphqlData).map(sanitizeProduct);
  return productService.addProducts(products);
}

const AppService = {
  syncDataWithExternalServer,
};

export default AppService;
