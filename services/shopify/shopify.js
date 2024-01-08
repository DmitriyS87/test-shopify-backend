
import { client } from './api/client.js';
import { getProductMediaQuery } from './queries/product.js';
import { getProductsQuery } from './queries/prosucts.js';

const makeRequest = async (query) => {
  return await client.request(query);
}

const getProducts = async (productsPerCursor = 10, imagesPerCursor = 2) => {
  const data = await makeRequest(getProductsQuery(productsPerCursor, imagesPerCursor));
  return data;
}

const getProduct = async (id) => {
  const data = await makeRequest(getProductMediaQuery(id));
  return data;
}

export default ShopifyService = {
  getProducts,
  getProduct
};