const db = require("../data/config");

function getIngredients() {
  return db("ingredients");
}

module.exports = {
  getIngredients,
};
