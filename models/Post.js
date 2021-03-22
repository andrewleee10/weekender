const pls = require('passport-local-sequelize')
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

Post.init({
 postId: DataTypes.STRING, 
 title: DataTypes.STRING,
 description: DataTypes.STRING,
 time: DataTypes.TIME
})

module.exports = Post




