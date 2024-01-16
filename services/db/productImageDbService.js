import { ProductImage } from "../../core/db.js";

const updateOrCreateProductImage = async ({ ProductId, ImageId }) => {
  try {
    const existingRecord = await ProductImage.findOne({
      where: {
        ProductId,
        ImageId,
      },
    });

    if (existingRecord) {
      return existingRecord;
    }

    const newRecord = await ProductImage.create({
      ProductId,
      ImageId,
    });

    return newRecord;
  } catch (error) {
    throw new Error(`Error updating or creating product-image relation: ${error}`);
  }
};

const ProductImageDBService = {
  updateOrCreateProductImage,
};

export default ProductImageDBService;
