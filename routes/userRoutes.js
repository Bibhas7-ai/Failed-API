const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Get user profile
router.get("/profile", authMiddleware, userController.getUserProfile);

// Update user profile
router.put("/profile", authMiddleware, userController.updateUserProfile);

// Delete user account
router.delete("/profile", authMiddleware, userController.deleteUserAccount);

module.exports = router;
