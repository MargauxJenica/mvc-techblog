const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// users can have many posts
User.hasMany(Post, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// posts belong to a single user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
// posts can have many comments 
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
// comments belong to a single user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
// a single comment belongs to a single user
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };