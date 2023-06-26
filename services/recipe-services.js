const Recipe = require("../models/Recipe");

// Get all recipes
async function getAllRecipes() {
  try {
    const recipes = await Recipe.find();
    return recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}

// Get recipe by ID
async function getRecipeById(recipeId) {
  try {
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    throw new Error("Failed to fetch recipe");
  }
}

// Create a new recipe
async function createRecipe(recipeData) {
  try {
    const recipe = new Recipe(recipeData);
    await recipe.save();
    return recipe;
  } catch (error) {
    throw new Error("Failed to create recipe");
  }
}

// Update a recipe
async function updateRecipe(recipeId, recipeData) {
  try {
    const recipe = await Recipe.findByIdAndUpdate(recipeId, recipeData, {
      new: true,
    });
    return recipe;
  } catch (error) {
    throw new Error("Failed to update recipe");
  }
}

// Delete a recipe
async function deleteRecipe(recipeId) {
  try {
    await Recipe.findByIdAndRemove(recipeId);
  } catch (error) {
    throw new Error("Failed to delete recipe");
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
