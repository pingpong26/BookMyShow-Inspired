const Theater = require('../models/Theater');

const createTheater = async (req, res) => {
  try {
    const theater = new Theater(req.body);
    const saved = await theater.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getTheaters = async (req, res) => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { createTheater, getTheaters };
