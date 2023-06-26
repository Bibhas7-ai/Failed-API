const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middlewares/authMiddleware");

// Get all recipes
router.get("/", recipeController.getAllRecipes);

// Get a specific recipe
router.get("/:id", recipeController.getRecipeById);

// Create a new recipe
router.post("/", authMiddleware, recipeController.createRecipe);

// Update a recipe
router.put("/:id", authMiddleware, recipeController.updateRecipe);

// Delete a recipe
router.delete("/:id", authMiddleware, recipeController.deleteRecipe);

module.exports = router;
