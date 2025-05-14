const Show = require("../models/Show");

const createShow = async (req, res) => {
  try {
    const show = new Show(req.body);
    const saved = await show.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getShows = async (req, res) => {
  try {
    const shows = await Show.find()
      .populate("movie", "title")
      .populate("theater", "name location");
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const searchShows = async (req, res) => {
  const { location, date } = req.query;

  if (!location || !date) {
    return res.status(400).json({ message: "Location and date are required" });
  }

  try {
    const shows = await Show.find({ date })
      .populate({
        path: "movie",
        select: "title genre duration posterUrl",
      })
      .populate({
        path: "theater",
        match: { location }, // ✅ filter by location
        select: "name location",
      });

    // Remove shows where theater didn't match (null after populate)
    const filtered = shows.filter((show) => show.theater !== null);

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = { createShow, getShows, searchShows };
