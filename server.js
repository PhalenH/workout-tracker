const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// logs to console actions of events on page
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

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body }, res) => {
  db.Workout.updateOne;
});

app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({});
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// app.get("/api/workouts", async (req, res) => {
//     try {
//       const workoutData = await db.Workout.find({});

//       return res.json(workoutData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   app.put("/api/workouts/:id", async (req, res) => {
//     try {
//       const workoutData = await db.Workout.updateOne(
//         {},
//         {
//           where: {},
//         }
//       );

//       return res.json(workoutData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   app.post("/api/workouts", async (req, res) => {
//     try {
//       const workoutData = await db.Workout.create;

//       return res.json(workoutData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   app.get("/api/workouts/range", async (req, res) => {
//     try {
//       const workoutData = await db.Workout.find({});

//       return res.json(workoutData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
