// import models
const Comment = require('./Comment.js')
const Post = require('./Post.js')
const isGoing = require('./isGoing.js')
const User = require('./User.js')


// user has many posts and comments
User.hasMany(Post, { foreignKey: 'user_id'})
User.hasMany(Comment, { foreignKey: 'user_id'})
// posts and comments has one user
Post.belongsTo(User, { foreignKey: 'user_id'})
Comment.belongsTo(User, { foreignKey: 'user_id'})
// posts has many comments & comments have one post
Post.hasMany(Comment, { foreignKey: 'post_id'})
Comment.belongsTo(Post, { foreignKey: 'post_id'})
// User has many isGoing
User.hasMany(isGoing, { foreignKey: 'user_id'})
isGoing.belongsTo(User, { foreignKey: 'user_id'})
// isGoing belongs to post and post has many isGoing
isGoing.belongsTo(Post, { foreignKey: 'post_id'})
Post.hasMany(isGoing, { foreignKey: 'post_id'})



module.exports = {
  Comment,
  Post,
  isGoing,
  User
}