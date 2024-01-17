import Joi from "joi";

import { Image, Product, ProductImage, sequelize } from "../core/db.js";
import ImageDBService from "./db/imageDbService.js";
import ProductImageDBService from "./db/productImageDbService.js";
import ProductDBService from "./db/productDbService.js";
import { splitToChunks } from "../helpers/db.js";

import { dbConfig } from "../core/config.js";

async function deleteImageIfNotLinked(imageId) {
  const linkedProducts = await Product.findAll({
    include: [
      {
        model: Image,
        through: {
          model: ProductImage,
          where: { imageId: imageId },
        },
        attributes: [],
      },
    ],
  });

  if (linkedProducts.length === 0) {
    await ImageDBService.deleteImage(imageId);
    return true;
  }

  return false;
}

async function addProducts(products) {
  const productsChunks = splitToChunks(products, dbConfig.dbChunkSize);
  const result = await Promise.allSettled(
    productsChunks.map(prepareProcessDbChunk(addProduct)),
  );
  return result;
}

function prepareProcessDbChunk(asyncFunc) {
  return async (chunk) => {
    const transaction = await sequelize.transaction();
    try {
      await Promise.all(chunk.map(asyncFunc));
      return await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
}

const productSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  shopify_id: Joi.string().max(255).required(),
  html: Joi.string(),
  status: Joi.string(),
  type: Joi.string(),
  description: Joi.string(),
  img_url: Joi.string(),
  img_id: Joi.string(),
});

async function validateProduct(product) {
  try {
    await productSchema.validateAsync(product);
  } catch (error) {
    throw new Error("Ошибка валидации: " + error.message);
  }
}

async function addProduct(product) {
  const { name, shopify_id, html, status, type, description, img_url, img_id } =
    product;
  try {
    await validateProduct(product);
    const productRecord = await ProductDBService.updateOrCreateProduct({
      name,
      shopify_id,
      html,
      status,
      type,
      description,
    });
    if (img_id && img_url) {
      const imageRecord = await ImageDBService.updateOrCreateImage({
        url: img_url,
        shopify_id: img_id,
      });
      await ProductImageDBService.updateOrCreateProductImage({
        ProductId: productRecord.id,
        ImageId: imageRecord.id,
      });
    }
  } catch (error) {
    throw ("Error adding product:", error.message);
  }
}

async function getProducts() {
  const products = await ProductDBService.getAllProducts();
  return products;
}

const ProductService = {
  addProduct,
  addProducts,
  getProducts,
  deleteImageIfNotLinked,
};

export default ProductService;
