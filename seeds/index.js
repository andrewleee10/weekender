const seedComments = require('./comment-seed')
const seedPosts = require('./post-seed')
// const seedUsers = require('./user-seed')

const sequelize = require('../db')

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')
  await seedComments()
  console.log('\n----- COMMENTS SEEDED -----\n')

  await seedPosts()
  console.log('\n----- POSTS SEEDED -----\n')

  // await seedUsers()
  // console.log('\n----- USERS SEEDED -----\n')


  process.exit(0)
}

seedAll()
