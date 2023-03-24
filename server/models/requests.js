const mongoose = require('mongoose')

const medSchema = mongoose.Schema({
    name: String,
    quantity: Number
});

const reqSchema = mongoose.Schema({
    name: String,
    meds: [medSchema],
    status: String,
    created: {
        type: Date,
        default: Date.now
    }
});
const Reqs = mongoose.model("Reqs", reqSchema);
module.exports = Reqs;

module.exports = mongoose.model('Reqs', reqSchema);