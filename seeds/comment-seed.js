const { Comment } = require('../models')

const commentData = [
  {
    text: 'Sounds fun!',
    user_id: 1,
    post_id:1
  },
  {
    text: 'I would love to join!',
    user_id: 1,
    post_id: 1
  },
  {
    text: 'Wish I could be there',
    user_id: 1,
    post_id: 1
  },
  {
    text: 'Is there anything I should bring?',
    user_id: 1,
    post_id: 1
  },
  {
    text: 'Woot!',
    user_id: 1,
    post_id: 1
  }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments
