const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: String,
    firstname: String,
    cnp: Number,
    address: String,
    addresstype: String,
    phone: String,
    age: Number,
    address2: String,
    addresstype2: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);