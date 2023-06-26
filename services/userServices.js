const User = require("../models/user");

// Get user by ID
async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

// Get user by email
async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

// Create a new user
async function createUser(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Failed to create user");
  }
}

// Update a user
async function updateUser(userId, userData) {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return user;
  } catch (error) {
    throw new Error("Failed to update user");
  }
}

// Delete a user
async function deleteUser(userId) {
  try {
    await User.findByIdAndRemove(userId);
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
