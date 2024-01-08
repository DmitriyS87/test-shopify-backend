import { Image } from "../../core/db.js";

async function createImage(url, shopifyId) {
  try {
    const image = await Image.create({ url, shopify_id: shopifyId });
    return image;
  } catch (error) {
    throw new Error(`Error creating image: ${error.message}`);
  }
}

async function getAllImages() {
  try {
    const images = await Image.findAll();
    return images;
  } catch (error) {
    throw new Error(`Error fetching images: ${error.message}`);
  }
}

async function getImageById(id) {
  try {
    const image = await Image.findByPk(id);
    return image;
  } catch (error) {
    throw new Error(`Error fetching image: ${error.message}`);
  }
}

async function updateImage(id, updatedData) {
  try {
    const image = await Image.findByPk(id);
    if (!image) {
      throw new Error("Image not found");
    }

    await Image.update(updatedData);
    return image;
  } catch (error) {
    throw new Error(`Error updating image: ${error.message}`);
  }
}

async function deleteImage(id) {
  try {
    const image = await Image.findByPk(id);
    if (!image) {
      throw new Error("Image not found");
    }

    const isDeleted = await deleteImageIfNotLinked(id);
    if (!isDeleted) {
      throw new Error("Image has linked products");
    }

    return "Image deleted successfully";
  } catch (error) {
    throw new Error(`Error deleting image: ${error.message}`);
  }
}

async function updateOrCreateImage(imageData) {
  try {
    const [image, created] = await Image.findOrCreate({
      where: { shopify_id: imageData.shopify_id },
      defaults: imageData,
    });
    if (!created) {
      await Image.update(imageData, {
        where: { shopify_id: imageData.shopify_id },
      });
    }
    return image;
  } catch (error) {
    console.error("Error updating or creating image:", error);
    throw error;
  }
}

const ImageService = {
  createImage,
  getAllImages,
  getImageById,
  updateImage,
  deleteImage,
  updateOrCreateImage,
};

export default ImageService;
