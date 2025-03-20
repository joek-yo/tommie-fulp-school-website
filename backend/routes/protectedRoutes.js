// Backend routes/protectedRoutes.js

const express = require("express");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Route only accessible to authenticated users
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ msg: `Welcome to your dashboard, ${req.user.role}` });
});

// Admin-only route
router.get("/admin", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.json({ msg: "Welcome Admin, you have full access!" });
});

// Teacher-only route
router.get("/teacher", authMiddleware, roleMiddleware(["teacher"]), (req, res) => {
  res.json({ msg: "Welcome Teacher, you can manage your classes!" });
});

// Student-only route
router.get("/student", authMiddleware, roleMiddleware(["student"]), (req, res) => {
  res.json({ msg: "Welcome Student, view your progress here!" });
});

module.exports = router;