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
        type: [String],
        default: []
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    chapters: {
        type: [String],
        default: []
    },
    price: {
        type: String,
        required: true
    },
    lastUpdated: {
        type: String,
    }
});

module.exports = mongoose.model('Course', courseSchema);
