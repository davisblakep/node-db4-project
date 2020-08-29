const express = require("express");
const Recipe = require("../models/recipes");
const recipes = require("../models/recipes");

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

router.post("/recipes", (req, res) => {
  const recipeData = req.body;

  Recipe.addRecipe(recipeData)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create a new recipe." });
    });
});

router.put("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipe.getRecipesById(id)
    .then((x) => {
      if (x) {
        Recipe.updateRecipe(changes, id).then((updatedScheme) => {
          res.json(updatedScheme);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update scheme" });
    });
});

router.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;

  Recipe.deleteRecipe(id).then((deleted) => {
    if (deleted) {
      res.json({ message: "Deleted.  Game Over" });
    } else {
      res
        .status(404)
        .json({ message: "Could not find the recipe with the given id." });
    }
  });
});

module.exports = router;
