const { Model, DataTypes } = require('sequelize')

const sequelize = require('../db')

class isGoing extends Model { }

isGoing.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    check_going: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'isGoings'
  }
)

module.exports = isGoing
