const mongoose = require('mongoose');

const ustaSchema = new mongoose.Schema({
    ismi: {
        type: String,
        min: 3,
        required: true
    },

    role: {
        type: String,
        default: 'oddiy usta',
        min: 3
    },

    password: {
        type: String,
        min: 3,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('ustalar', ustaSchema);