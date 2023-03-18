const mongoose = require('mongoose');

const medsSchema = mongoose.Schema({
    nume: String,
    producator: String,
    gramaj: String,
    forma: String,
    dataExp: String,
    stock: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

const Meds = mongoose.model("Meds", medsSchema);
module.exports = Meds;

module.exports = mongoose.model('Meds', medsSchema);