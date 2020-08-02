const sequelize = require("../config/connection");
const { Model, DataType, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] },
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isUrl: true },
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: "user", key: "id" },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
