const router = require("express").Router();
const Workout = require("../models/Workout");

// create a new workout
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add an exercise to a workout
router.put("/workouts/:id", ({ body }, res) => {
  Workout.findByIdAndUpdate(
    { _id: mongojs.ObjectId(req.params.id) },
    { $push: { exercises: body } },
    { new: true }
    //  return the modified document rather than the original. defaults to false
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// has to get only the last workout
router.get("/workouts", (req, res) => {
  // filter?
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// (https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/)
// Calculates aggregate values for the data in a collection or a view.

// get stuff from last 7 workouts
router.get("/workouts/range", (req, res) => {
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
