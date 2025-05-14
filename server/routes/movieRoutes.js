const express = require("express");
const { createMovie, getMovies } = require("../controllers/movieController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createMovie); // protect route
router.get("/", getMovies);

module.exports = router;
