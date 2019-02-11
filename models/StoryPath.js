const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoryPathSchema = new Schema({
    path: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    choices: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("StoryPath", StoryPathSchema);