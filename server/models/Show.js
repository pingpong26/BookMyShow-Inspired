const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    theater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater",
      required: true,
    },
    date: { type: String, required: true }, // e.g. 2025-05-15
    time: { type: String, required: true }, // e.g. "19:30"
    bookedSeats: { type: [String], default: [] }, // e.g. ['A1', 'A2']
  },
  { timestamps: true }
);

module.exports = mongoose.model("Show", showSchema);
