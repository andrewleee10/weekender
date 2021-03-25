const { Post } = require('../models')

const postData = [
  {
    title: 'Looking for people to play soccer!',
<<<<<<< HEAD
    description: 'Me and a couple friends want to play soccer but we do not have enough people. We are playing at Central Park at 2pm! Equipment is provided!',
    user_id: 1
=======
<<<<<<< HEAD
    description: 'Me and a couple friends want to play soccer but we do not have enough people. We are playing at Central Park at 2pm! Equipment is provided!'
  },
  {
    title: 'Looking for some people to play basketball',
    description: 'Some friends and I would like to play basketball at Central Park but do not have enough people. We are playing at 4pm and will provide equipment.'
=======
    description: 'Me and a couple friends want to play soccer but we do not have enough people. We are playing at Central Park at 2pm! Equipment is provided!',
    user_id: 1
>>>>>>> 68ad1cf4c83782198a46640105744789efae5983
>>>>>>> 1c5298c65a485976450c052ac324d6df69243f92
  }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
