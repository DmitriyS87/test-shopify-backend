import { Sequelize, DataTypes } from "sequelize";
import getProductModel from '../models/productModel.js';
import getImageModel from '../models/imageModel.js';
import getProductImageModel from '../models/prductImageModel.js';

const user = process.env.PGUSER;
const host = process.env.IS_DEV === "TRUE" ? process.env.DEV_HOST : process.env.PGHOST;
const password = process.env.PGPASSWORD;
const db = process.env.PGDATABASE;
const port = process.env.PGPORT;

const sequelize = new Sequelize(db, user, password, {
    host,
    port,
    dialect: 'postgres',
    // logging: (sql) => {
    //     console.log({sql}); 
    // },
},
);

const Product = getProductModel(sequelize, DataTypes);
const Image = getImageModel(sequelize, DataTypes);
const ProductImage = getProductImageModel(sequelize);

Product.belongsToMany(Image, { through: ProductImage, as: 'images' });
Image.belongsToMany(Product, { through: ProductImage, as: 'products' });

export {
    sequelize,
    Product,
    Image,
    ProductImage,
};