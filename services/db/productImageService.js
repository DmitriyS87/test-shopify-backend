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
    console.error("Error updating or creating product-image relation:", error);
    throw error;
  }
};

const ProductImageService = {
  updateOrCreateProductImage,
};

export default ProductImageService;
