const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

// logs to console actions of events on page
app.use(logger("dev"));
const routes = require("./routes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

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
