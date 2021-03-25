const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')
var moment = require('moment')
let date = moment().format('MM DD YYYY, h:mm:ss a')

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
    time: {
      type: DataTypes.DATE,
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




