const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    expecting: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    languages: {
        type: [String],
        default: []
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Community', communitySchema);
