const express = require("express");
const {
  createShow,
  getShows,
  searchShows,
} = require("../controllers/showController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createShow);
router.get("/", getShows);
router.get("/search", searchShows); // ✅ New route

module.exports = router;
