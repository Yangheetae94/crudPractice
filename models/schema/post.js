const { Schema } = require('mongoose');

const PostSchema = new Schema ({
    id: String,
    title: String,
    content: String,
    author: String,
}, {
    timestamps: true,
}
);

module.exports = PostSchema;
    
