const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// create model folder and model files first
// const db = require("./models")

const app = express();
const PORT = process.env.PORT || 3001;

// what does this do?
// possibly logs when in dev nnot when deployed
app.use(logger("dev"));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//    what do i need in my .env file   ||  what should this url be? || what does this true/false mean?
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// with useNewUrlParser: true we need a port after localhost (for this I used workoutdb)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
