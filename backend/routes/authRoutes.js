const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");

const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");

// Register with image upload
router.post("/register", upload.single("profileImage"), registerUser);

// Login and protected route
router.post("/login", loginUser);
router.get("/me", protect, getUserInfo);

module.exports = router;
