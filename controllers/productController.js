
import ShopifyService from '../services/shopify/shopify.js';

const getProducts = async (req, res, next) => {
    try {
        const products = await ShopifyService.getProducts();
        return res.status(200).json(products);
    }
    catch (error) {
        next(error);
    }
}

const ProductController = {
    getProducts
};

export default ProductController;