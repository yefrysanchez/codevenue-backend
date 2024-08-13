const { config } = require("dotenv");
config()
const express = require("express");
const { routerSong } = require("./src/router/songRoutes");
const app = express()
const PORT = process.env.PORT || 5505




app.get('/', (req, res) => {
    res.send('<h1>Welcome to CodeVenue</h1>')
})

app.use("/api", routerSong)



app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})