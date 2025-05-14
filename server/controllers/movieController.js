const Movie = require('../models/Movie');

// @desc    Create a new movie
// @route   POST /api/movies
// @access  Private/Admin
const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const saved = await movie.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { createMovie, getMovies };
