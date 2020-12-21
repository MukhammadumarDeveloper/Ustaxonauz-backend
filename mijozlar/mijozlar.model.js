const mongoose = require('mongoose');

const mijozlarjadvaliSxema = new mongoose.Schema({
    tr: {
        type: String,
        required: true
    },
    mijozismi: {
        type: String,
        min: 3,
        required: true
    },
    mijoztelraqami: {
        type: String,
        required: true
    },
    qurilma: {
        type: String,
        min: 2,
        required: true
    },
    aybi: {
        type: String,
        min: 3,
        required: true
    },
    tuzatildimi: {
        type: Boolean,
        required: true,
        default: false
    },
    pul: {
        type: String,
        min: 2,
        default: '000'
    },
    usta: {
        type: String,
        min: 3,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('mijozlar', mijozlarjadvaliSxema);