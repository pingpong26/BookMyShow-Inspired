const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String },
    duration: { type: Number }, // in minutes
    language: { type: String },
    description: { type: String },
    releaseDate: { type: Date },
    posterUrl: { type: String }, // link to poster image
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
