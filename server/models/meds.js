const mongoose = require('mongoose');

const medsSchema = mongoose.Schema({
    name: String,
    Manufacturer: String,
    Dosage: String,
    medtype: String,
    dateOfExp: String,
    stock: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

const Meds = mongoose.model("Meds", medsSchema);
module.exports = Meds;

module.exports = mongoose.model('Meds', medsSchema);