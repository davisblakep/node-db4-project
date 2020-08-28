const express = require("express");
const Recipe = require("../models/recipes");

const router = express.Router();

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.getRecipes();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id", async (req, res, next) => {
  try {
    const recipe = await Recipe.getRecipesById(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found.",
      });
    }
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id/ingredients", async (req, res, next) => {
  try {
    const recipe = await Recipe.getShoppingList(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found.",
      });
    }
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id/instructions", async (req, res, next) => {
  try {
    const recipe = await Recipe.getInstructions(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found.",
      });
    }
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
