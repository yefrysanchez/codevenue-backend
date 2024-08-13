require("dotenv").config();
const express = require("express");
const { routerSong } = require("./src/router/songRoutes");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5505;
const connectDB = require("./config/dbConn");

//Connect to mongoDB
connectDB()


app.get("/", (req, res) => {
  res.send("<h1>Welcome to CodeVenue</h1>");
});

app.use("/api", routerSong);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
