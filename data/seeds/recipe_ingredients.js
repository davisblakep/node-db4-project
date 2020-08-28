exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 5 },
        { recipe_id: 1, ingredient_id: 26 },
        { recipe_id: 1, ingredient_id: 25 },
        { recipe_id: 1, ingredient_id: 27 },
        { recipe_id: 2, ingredient_id: 1 },
        { recipe_id: 3, ingredient_id: 19 },
        { recipe_id: 3, ingredient_id: 9 },
        { recipe_id: 4, ingredient_id: 25 },
        { recipe_id: 4, ingredient_id: 28 },
        { recipe_id: 4, ingredient_id: 26 },
        { recipe_id: 4, ingredient_id: 27 },
        { recipe_id: 4, ingredient_id: 9 },
      ]);
    });
};
