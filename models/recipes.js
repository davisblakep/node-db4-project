const db = require("../data/config");

function getRecipes() {
  return db("recipes").select(
    "recipes.id",
    "recipes.recipe",
    "recipes.instructions"
  );
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
    .select("ingredients.id as ingredient_id", "ingredient");
  // .first();
}

function getInstructions(id) {
  return db("recipes")
    .select("recipes.id", "recipes.instructions")
    .where("recipes.id", id)
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe, "id")
    .then(([id]) => getRecipesById(id));
}

function updateRecipe(changes, id) {
  return db("recipes").where({ id }).update(changes);
}

function deleteRecipe(id) {
  return db("recipes").where({ id }).delete();
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
