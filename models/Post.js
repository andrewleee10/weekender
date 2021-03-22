const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

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
    allowNull: false
  },
  comment_id: {
    type: DataTypes.INTEGER
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName:true,
    underscored: true,
    modelName:'posts'
  }
)

module.exports = Post




