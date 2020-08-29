const db = require("../data/config");

function getIngredients() {
  return db("ingredients");
}

function getIngredientsById(id) {
  return db("ingredients")
    .select("ingredients.id as ingredients_id", "ingredients.ingredient")
    .where("ingredients.id", id)
    .first();
}

function addIngredients(ingredient) {
  return db("ingredients")
    .insert(ingredient, "id")
    .then(([id]) => getIngredientsById(id));
}

function updateIngredient(changes, id) {
  return db("ingredients").where({ id }).update(changes);
}

function deleteIngredient(id) {
  return db("ingredients").where({ id }).delete();
}

module.exports = {
  getIngredients,
  getIngredientsById,
  addIngredients,
  updateIngredient,
  deleteIngredient,
};
