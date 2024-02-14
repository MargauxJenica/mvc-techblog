const User = require('./User');
const Comment = require('./Comment');
const Blogpost = require('./Blogpost');


User.hasMany(Blogpost, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Comment, Blogpost };