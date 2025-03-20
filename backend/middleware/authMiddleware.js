// Backend/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

// Middleware to check if user is authenticated
exports.authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};

// Middleware to check if user has the required role
exports.roleMiddleware = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ msg: "Access denied" });
  }
  next();
};