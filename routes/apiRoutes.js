const router = require("express").Router();
const Workout = require("../models/Workout");

// create a new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Add an exercise to a workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    { _id: mongojs.ObjectId(params.id) },
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
router.get("/api/workouts", (req, res) => {
  // need aggregate again since there's a total duration on the landing page
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(1)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// View the combined weight of multiple exercises from the past seven workouts on the stats page.
// View the total duration of each workout from the past seven workouts on the stats page.
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        // why did field name for duration only work when matching the map param? sending an object like req.body
        totalDuration: { $sum: "$exercises.duration" },
        combinedWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .sort({ day: 1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// delete workout from id
router.delete("/api/workouts/:id", ({ params }, res) => {
  Workout.findByIdAndDelete({ _id: params.id })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
