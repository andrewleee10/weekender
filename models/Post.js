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
<<<<<<< HEAD
      allowNull: false,
      defaultValue: DataTypes.NOW
=======
<<<<<<< HEAD
      allowNull: false,
      defaultValue: date
    },
    user_id: {
      type: DataTypes.INTEGER
=======
      defaultValue: DataTypes.NOW
>>>>>>> 68ad1cf4c83782198a46640105744789efae5983
>>>>>>> 1c5298c65a485976450c052ac324d6df69243f92
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




