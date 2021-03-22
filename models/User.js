const pls = require('passport-local-sequelize')
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = pls.defineUser(sequelize, {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING
})

module.exports = User