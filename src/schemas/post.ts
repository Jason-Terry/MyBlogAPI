import mongoose = require('mongoose');

const postSchema: mongoose.Schema = new mongoose.Schema({
    title: String,
    author: String,
    dateCreated: String,
    dateEdited: String,
    body: String
});

// model name, schema, and collection.
module.exports = mongoose.model('post', postSchema, 'BlogHist');