import { Sequelize, DataTypes } from "sequelize";
import getProductModel from "../models/productModel.js";
import getImageModel from "../models/imageModel.js";
import getProductImageModel from "../models/prductImageModel.js";
import { dbConfig } from "./config.js";

const {db, user, password, host, port, pool} = dbConfig;

const sequelize = new Sequelize(db, user, password, {
  host,
  port,
  dialect: "postgres",
  pool
});

const Product = getProductModel(sequelize, DataTypes);
const Image = getImageModel(sequelize, DataTypes);
const ProductImage = getProductImageModel(sequelize);

Product.belongsToMany(Image, { through: ProductImage, as: "images" });
Image.belongsToMany(Product, { through: ProductImage, as: "products" });

export { sequelize, Product, Image, ProductImage };
