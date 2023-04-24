const mongoose = require('mongoose');
const PostSchema = require('./schema/post');

exports.Post = mongoose.model('Post', PostSchema);