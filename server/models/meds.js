const mongoose = require('mongoose');

const medsSchema = mongoose.Schema({
    nume: String,
    gramaj: String,
    forma: String,
    dataExp: String,
    stock: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Meds = mongoose.model("Meds", medsSchema);
module.exports = Meds;

module.exports = mongoose.model('Meds', medsSchema);