const { Post } = require('../models')

const postData = [
  {
    title: 'Looking for people to play soccer!',
    description: 'Me and a couple friends want to play soccer but we do not have enough people. We are playing at Central Park at 2pm! Equipment is provided!'
  }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
