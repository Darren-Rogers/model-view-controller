const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chat extends Model {}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body:{
      type: DataTypes.STRING,
      allowNull: false
    },
    sequelize,
    modelName: 'chat',
    underscored: true
  }
)