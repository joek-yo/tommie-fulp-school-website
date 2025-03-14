// Backend/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes")

require("dotenv").config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
connectDB();

// Default Route
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("🚀 Backend is Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
