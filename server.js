const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// create model folder and model files first
// const db = require("./models")

const app = express();
const PORT = process.env.PORT || 3001;

// what does this do?
app.unsubscribe(logger("dev"));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// do i not need this?
// app.use(express.static(path.join(__dirname, "public")));

//    what do i need in my .env file   ||  what should this url be? || what does this true/false mean?
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });