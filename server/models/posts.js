const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    nume: String,
    prenume: String,
    cnp: Number,
    adresa: String,
    tipAdresa: String,
    telefon: String,
    varsta: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);