const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const genreSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true }, // Path to the genre image
});

module.exports = mongoose.model("Genre", genreSchema);
