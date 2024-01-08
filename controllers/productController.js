import DBCommonService from "../services/db/dBCommonService.js";

const getProducts = async (req, res, next) => {
  try {
    const products = await DBCommonService.getProducts();
    const result = filterProductData(products);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

function filterProductData(productData) {
  return productData.map((product) => {
    const filteredProduct = {
      id: product.id,
      html: product.html,
      name: product.name,
      status: product.status,
      type: product.type,
      description: product.description,
      shop_id: product.shopify_id,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      images: product.images.map((image) => ({
        url: image.url,
      })),
    };
    return filteredProduct;
  });
}

const ProductController = {
  getProducts,
};

export default ProductController;
