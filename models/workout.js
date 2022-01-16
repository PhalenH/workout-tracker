const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        unique: true,
        trim: true,
        required: "Enter a name for the exercise",
      },

      type: {
        type: String,
        trim: true,
        required: "Type of exercise is required",
      },

      weight: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      duration: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
