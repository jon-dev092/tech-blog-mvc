const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user'
});

module.exports = { User, Blog };
