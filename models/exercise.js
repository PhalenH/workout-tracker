const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
    required: "Weight of exercise is required",
  },

  sets: {
    type: Number,
    required: "Sets of exercise is required",
  },

  reps: {
    type: Number,
    required: "Reps of exercise is required",
  },

  duration: {
    type: Number,
    required: "Duartion of exercise is required",
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
