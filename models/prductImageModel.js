const getProductImageModel = (sequelize) => {
  return sequelize.define("ProductImage", {}, { timestamps: false });
};

export default getProductImageModel;
