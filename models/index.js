const User = require('./User');
const Comment = require('./Comment');
const Blogpost = require('./Blogpost');

// users can have many posts
User.hasMany(Blogpost, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// blogposts belong to a single user
Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
});
// blogposts can have many comments 
Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
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

module.exports = { User, Comment, Blogpost };