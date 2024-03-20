const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    resources: {
        type: String
    },
    thumbnail: {
        type: String
    },
    chapters: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);
