const router = require("express").Router();
const Workout = require("../models/Workout");

// create a new workout
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Add an exercise to a workout
router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    // why could I just use params.id, and didn't have to do { _id: mongojs.ObjectId(params.id) },
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
    // new returns the modified document rather than the original
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Get only the last workout
router.get("/workouts", (req, res) => {
  // filter and sort?
  Workout.find()
    .sort({ day: -1 })
    .limit(1)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// (https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/)
// Calculates aggregate values for the data in a collection or a view.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.
// View the total duration of each workout from the past seven workouts on the stats page.
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        combinedWeight: { $sum: "$exercises.weight" },
        combinedDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// delete workout from id
router.delete("/workouts/:id", ({ params }, res) => {
  Workout.findByIdAndDelete({ _id: params.id })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
