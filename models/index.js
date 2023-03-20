// imports
const User = require('./User');
const Blog = require('./Blog');

// Define a one-to-many association between User and Blog, with the foreign key in the Blog model and the onDelete action set to CASCADE
User.hasMany(Blog, {
  foreignKey: 'user',
  onDelete: 'CASCADE'
});
// Define a many-to-one association between Blog and User, with the foreign key in the Blog model and an alias for the User model
Blog.belongsTo(User, {
  foreignKey: 'user',
  as: 'BlogAuthor'
});

module.exports = { User, Blog };
