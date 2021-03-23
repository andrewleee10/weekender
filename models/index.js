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

<<<<<<< HEAD
User.hasMany(Post, { through: Comment, foreignKey: 'comment_id'})
Post.belongsTo(User, { foreignKey: 'post_id'})

=======
User.hasMany(Post, {through: Comment, foreignKey: 'comment_id'})
Post.hasMany(User, { foreignKey: 'post_id'})
>>>>>>> 8f7d4cedfc3593d881e797e93f2880f841e839c4

module.exports = {
  Comment,
  Post,
  User
}