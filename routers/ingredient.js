const express = require("express");
const Ingredient = require("../models/ingredients");

const router = express.Router();

router.get("/ingredients", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.getIngredients();
    res.json(ingredients);
  } catch (err) {
    next(err);
  }
});

router.get("/ingredients/:id", async (req, res, next) => {
  try {
    const ingredient = await Ingredient.getIngredientsById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({
        message: "Ingredient not found.",
      });
    }
    res.json(ingredient);
  } catch (err) {
    next(err);
  }
});

router.post("/ingredients", (req, res) => {
  const ingredient = req.body;

  Ingredient.addIngredients(ingredient)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new ingredient" });
    });
});

router.put("/ingredients/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Ingredient.getIngredientsById(id)
    .then((x) => {
      if (x) {
        Ingredient.updateIngredient(changes, id).then((updatedScheme) => {
          res.json(updatedScheme);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredient with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update ingredient" });
    });
});

router.delete("/ingredients/:id", (req, res) => {
  const { id } = req.params;

  Ingredient.deleteIngredient(id).then((deleted) => {
    if (deleted) {
      res.json({ message: "Deleted.  Game Over" });
    } else {
      res
        .status(404)
        .json({ message: "Could not find the ingredient with the given id." });
    }
  });
});

module.exports = router;
