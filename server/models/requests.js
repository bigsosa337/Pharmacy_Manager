const mongoose = require('mongoose')

const medSchema = mongoose.Schema({
    name: String,
    quantity: Number
});

const reqSchema = mongoose.Schema({
    nume: String,
    meds: [medSchema],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reqs', reqSchema);