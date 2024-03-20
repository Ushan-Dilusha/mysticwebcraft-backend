const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },
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

module.exports = mongoose.model("Community", communitySchema);
