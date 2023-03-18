const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    nume: String,
    prenume: String,
    cnp: Number,
    adresa: String,
    tipadresa: String,
    telefon: String,
    varsta: Number,
    adresa2: String,
    tipadresa2: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);