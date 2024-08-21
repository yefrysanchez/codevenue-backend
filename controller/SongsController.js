const Song = require("../model/Song");

//Get all Data
const getAllSongs = async (req, res) => {
  const genres = await Song.find();
  try {
    res.json(genres);
  } catch (err) {
    res.status(500).json({ mgs: err.message });
  }
};

//POST create song / ADD
const createSong = async (req, res) => {
  const { title, genre, duration, fileUrl } = req.body;

  if (!title || !genre || !duration || !fileUrl) {
    return res
      .status(400)
      .json({ msg: "title, genre, duration, fileUrl are required." });
  }
  const song = new Song({
    title,
    genre,
    duration,
    fileUrl,
  });
  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ mgs: err.message });
  }
};

module.exports = {
  getAllSongs,
  createSong,
};
