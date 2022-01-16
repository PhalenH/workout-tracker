const router = require("express").Router();
const Workout = require("../models/workout")

// has to get only the last workout
router.get("/api/workouts", (req, res) => {
  // filter?
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add an exercise to a workout
router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.updateOne;
});

// create a new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get stuff from last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({});
});

module.exports = router;

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