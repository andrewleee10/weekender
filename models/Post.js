const pls = require('passport-local-sequelize')
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Post = pls.definePost(sequelize, {
  postId: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  time: DataTypes.DATE
})

module.exports = Post




