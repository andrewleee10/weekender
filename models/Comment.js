const { Model, DataTypes } = require('sequelize')

const sequelize = require('../db')

class Comment extends Model { }

Comment.init(
  {
    // define columns
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time_posted: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
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
