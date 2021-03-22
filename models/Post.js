const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Post extends Model { }

Post.init(
  {
  postId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  } ,
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
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName:true,
    underscored: true,
    modelName:'post'
  }
)

module.exports = Post




