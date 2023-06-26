const Recipe = require("../models/Recipe");

// Get all recipes
async function getAllRecipes(req, res) {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get a single recipe by ID
async function getRecipeById(req, res) {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Create a new recipe
async function createRecipe(req, res) {
  try {
    const { title, ingredients, instructions } = req.body;

    // Create a new recipe
    const newRecipe = new Recipe({ title, ingredients, instructions });

    // Save the recipe to the database
    const savedRecipe = await newRecipe.save();

    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: savedRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update a recipe by ID
async function updateRecipe(req, res) {
  try {
    const { id } = req.params;
    const { title, ingredients, instructions } = req.body;

    // Find the recipe in the database and update its properties
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { title, ingredients, instructions },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a recipe by ID
async function deleteRecipe(req, res) {
  try {
    const { id } = req.params;

    // Find the recipe in the database and delete it
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
