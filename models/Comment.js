const { Model, DataTypes } = require('sequelize')

const sequelize = require('../db')

class Comment extends Model { }

Comment.init(
  {
    // define columns
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
  }
)

module.exports = Comment
