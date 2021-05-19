const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: true
    },
    miles: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = Log = mongoose.model('log', LogSchema);