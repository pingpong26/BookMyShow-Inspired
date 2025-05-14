const express = require('express');
const { createTheater, getTheaters } = require('../controllers/theaterController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createTheater);
router.get('/', getTheaters);

module.exports = router;
