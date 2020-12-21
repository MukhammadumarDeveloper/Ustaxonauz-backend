const mongoose = require('mongoose');

const tovarSchema = new mongoose.Schema({
    nomi: {
        type: String,
        min: 3,
        required: true
    },

    modeli: String,

    narxi: {
        type: String,
        min: 1,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('/tovarlar', tovarSchema);