
const express = require("express");
const routerSong = express.Router()

const genres = [
    {
      title: "Hip Hop",
      img: "./hiphop.jpg",
      song: [
        {
          id: 1,
          title: "I need a Girl",
          genre: "Hip Hop",
          duration: 248, // Duration in seconds
          fileUrl: "/i_need_a_girl.mp3", // URL or path to the song file
        },
        {
          _id: 2,
          title: "is there someone else?",
          genre: "Hip Hop",
          duration: 228, // Duration in seconds
          fileUrl: "/is_there_someone_else.mp3", // URL or path to the song file
        },
      ],
    },
    {
      title: "Pop",
      img: "./pop.jpg",
    },
    {
      title: "Chill House",
      img: "./chillhouse.jpg",
    },
    {
      title: "Latino",
      img: "./latino.jpg",
    },
    {
      title: "Coding Rhythm",
      img: "./coding.jpg",
    },
    {
      title: "Jazz",
      img: "./jazz.jpg",
    },
  ]



routerSong.get("/album",(req, res) => {
res.json(genres)
})


module.exports = {
    routerSong
}