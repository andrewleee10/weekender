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
<<<<<<< HEAD
      allowNull: false,
      defaultValue: date
    },
    user_id: {
      type: DataTypes.INTEGER
=======
      defaultValue: DataTypes.NOW
>>>>>>> 68ad1cf4c83782198a46640105744789efae5983
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




