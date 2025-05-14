const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require('./routes/movieRoutes');
const theaterRoutes = require('./routes/theaterRoutes');
const showRoutes = require('./routes/showRoutes');

dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theaters', theaterRoutes);
app.use('/api/shows', showRoutes);

// DB connection
connectDB();

// Basic Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
