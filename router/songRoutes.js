
const express = require("express");
const { getAllData } = require("../controller/GenresController");
const routerSong = express.Router()




routerSong.get("/", getAllData)


module.exports = {
    routerSong
}