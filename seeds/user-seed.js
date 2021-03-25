const { User } = require('../models')

const userData = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    username: 'johndoe',
    password: 'password1234',
    phone: '123-456-7890',
    bio: 'My name is John Doe and I love to play soccer!'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    username: 'janedoe',
    password: 'password1234',
    phone: '098-765-4321',
    bio: 'My name is Jane Doe and I love to hike!'
  }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
