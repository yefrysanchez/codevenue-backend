const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in seconds
    fileUrl: { type: String, required: true }, // URL or path to the song file
});

module.exports =  mongoose.model("Song", songSchema)