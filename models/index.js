// import models
const Comment = require('./Comment.js')
const Post = require('./Post.js')
const User = require('./User.js')

// Products belongsTo Category
// Product.belongsTo(Category, { foreignKey: 'category_id' })
// Categories have many Products
// Category.hasMany(Product, { foreignKey: 'category_id' })
// Products belongToMany Tags (through ProductTag)
// Tag.belongToMany(Product, { through: ProductTag, foreignKey: 'tag_id' })
// Tags belongToMany Products (through ProductTag)
// Product.belongToMany(Tag, { through: ProductTag, foreignKey: 'product_id' })


// user has many posts and comments
User.hasMany(Post, { foreignKey: 'user_id'})
User.hasMany(Comment, { foreignKey: 'user_id'})
// posts and comments has one user
Post.belongsTo(User, { foreignKey: 'user_id'})
Comment.belongsTo(User, { foreignKey: 'user_id'})
// posts has many comments 
Post.hasMany(Comment, { foreignKey: 'post_id'})
// comments have one post
Comment.belongsTo(Post, { foreignKey: 'post_id'})

module.exports = {
  Comment,
  Post,
  User
}