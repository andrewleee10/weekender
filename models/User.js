const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = pls.defineUser(sequelize, {
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  phone: DataTypes.STRING
})

module.exports = User