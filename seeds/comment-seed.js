const { Comment } = require('../models')

const commentData = [
  {
    text: 'Sounds fun!'
  },
  {
    text: 'I would love to join!'
  },
  {
    text: 'Wish I could be there'
  },
  {
    text: 'Is there anything I should bring?'
  },
  {
    text: 'Woot!'
  }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments
