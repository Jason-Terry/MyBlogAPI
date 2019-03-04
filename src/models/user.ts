import mongoose = require('mongoose');

const userSchema: mongoose.Schema = new mongoose.Schema({
    email: String,
    password: String
});

// model name, schema, and collection.
module.exports = mongoose.model('user', userSchema, 'UserAuth');