const getImageModel = (sequelize, DataTypes) => {
  const Image = sequelize.define("Image", {
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shopify_id: {
      type: DataTypes.TEXT,
      unique: true,
    },
  });

  return Image;
};

export default getImageModel;
