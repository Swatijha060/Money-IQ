require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer"); 
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/DashboardRoutes");

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware for parsing JSON bodies
app.use(express.json());

// Initialize database connection
connectDB();

// File upload logic using multer
const upload = multer({
  dest: path.join(__dirname, 'public/uploads'), // Destination folder for uploaded images
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true); // Accept the file
    } else {
      cb(new Error("File type is not supported"));
    }
  },
});

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);


const User = require('./models/User'); 
const mongoose = require('mongoose');


app.post("/api/v1/upload-profile-picture", upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

  try {
    const userId = req.body.userId; 
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndUpdate(userId, { profileImageUrl: imageUrl }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ imageUrl: user.profileImageUrl, message: "Profile image updated successfully" });
  } catch (err) {
    console.error("Failed to update user with image URL", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
