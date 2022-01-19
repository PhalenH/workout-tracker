const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/apiRoutes");
const viewRoutes = require("./routes/viewRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// logs to console actions of events on page
app.use(logger("dev"));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//                                                    what should this end url be? I changed it to workout so would get seeded data
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// with useNewUrlParser: true we need a port after localhost (for this I used workoutdb)

app.use(express.static("public"));
app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
