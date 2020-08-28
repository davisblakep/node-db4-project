const db = require("../data/config");

function getRecipes() {
  return db("recipes").select("recipes.id", "recipes.recipe");
}

function getRecipesById(id) {
  return db("recipes")
    .select("recipes.id", "recipes.recipe")
    .where("recipes.id", id)
    .first();
}

function getShoppingList(id) {
  return db("recipe_ingredients")
    .where("recipes.id", id)
    .join("recipes", "recipes.id", "recipe_ingredients.recipe_id")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .select("recipe", "ingredient");
  // .first();
}

function getInstructions(id) {
  return db("recipes")
    .select("recipes.id", "recipes.recipe", "recipes.instructions")
    .where("recipes.id", id)
    .first();
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
};
