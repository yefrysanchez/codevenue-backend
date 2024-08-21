
const express = require("express");
const { getAllSongs,createSong } = require("../controller/SongsController");
const routerSong = express.Router()




routerSong.get("/", getAllSongs)
routerSong.post("/", createSong)


module.exports = {
    routerSong
}