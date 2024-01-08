import { Product } from "../../core/db.js";
import ImageService from "./imageService.js";
import ProductImageService from "./productImageService.js";
import ProductService from "./productService.js";

async function deleteImageIfNotLinked(imageId) {
  const linkedProducts = await Product.findAll({
    where: { id: imageId },
  });

  if (linkedProducts.length === 0) {
    await Product.destroy({ where: { id: imageId } });
    return true;
  }

  return false;
}

async function addProducts(products) {
  const result = await Promise.all(
    products.map(
      async ({
        name,
        shopify_id,
        html,
        status,
        type,
        description,
        img_url,
        img_id,
      }) => {
        try {
          const productRecord = await ProductService.updateOrCreateProduct({
            name,
            shopify_id,
            html,
            status,
            type,
            description,
          });
          const imageRecord = await ImageService.updateOrCreateImage({
            url: img_url,
            shopify_id: img_id,
          });
          await ProductImageService.updateOrCreateProductImage({
            ProductId: productRecord.id,
            ImageId: imageRecord.id,
          });
        } catch (error) {
          console.error("Error adding product:", error.message);
        }
      },
    ),
  );
  return result;
}

async function getProducts() {
  const products = await ProductService.getAllProducts();
  return products;
}

const DBCommonService = {
  addProducts,
  getProducts,
  deleteImageIfNotLinked,
};

export default DBCommonService;
