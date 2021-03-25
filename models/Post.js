const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')
var moment = require('moment')

class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW

    time: {
      type: DataTypes.DATE,

      allowNull: false,
      defaultValue: date
    },
    user_id: {
      type: DataTypes.INTEGER

      defaultValue: DataTypes.NOW

    location: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts'
  }
)
module.exports = Post




