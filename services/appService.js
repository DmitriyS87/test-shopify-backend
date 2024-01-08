import { transformShopifyProduct } from "../helpers/index.js";
import DBCommonService from "./db/dBCommonService.js";
import ShopifyService from "./shopify/shopify.js";

const syncDataWithExternalServer = async () => {
    try {
        const products = await ShopifyService.getProducts();
        return await addShopifyProducts(products);
    } catch (error) {
        console.log('error:', JSON.stringify(error?.graphQLErrors));
        throw new Error(`Error syncing data: ${error.message}`);
    }
};

async function addShopifyProducts(graphqlData) {
    const products = transformShopifyProduct(graphqlData);
    return DBCommonService.addProducts(products);
}

const AppService = {
    syncDataWithExternalServer
};

export default AppService;

