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

module.exports = {
  Comment,
  Post,
  User
}