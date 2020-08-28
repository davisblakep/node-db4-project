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

module.exports = router;
