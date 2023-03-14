const mongoose = require('mongoose');

const medsSchema = mongoose.Schema({
    nume: String,
    gramaj: Number,
    forma: String,
    dataExp: Date,
    stock: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

const Meds = mongoose.model("Meds", medsSchema);
module.exports = Meds;

module.exports = mongoose.model('Meds', medsSchema);