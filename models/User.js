const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = pls.defineUser(sequelize, {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  post_id: DataTypes.INTEGER
})

module.exports = User
