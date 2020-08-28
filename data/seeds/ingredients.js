exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient: "Eggs" },
        { id: 2, ingredient: "Flour" },
        { id: 3, ingredient: "Sugar" },
        { id: 4, ingredient: "Tomatoes" },
        { id: 5, ingredient: "Basil" },
        { id: 6, ingredient: "Garlic" },
        { id: 7, ingredient: "Onions" },
        { id: 8, ingredient: "Ground Chuck" },
        { id: 9, ingredient: "Chicken Breasts" },
        { id: 10, ingredient: "Salt" },
        { id: 11, ingredient: "Pepper" },
        { id: 12, ingredient: "Cumin" },
        { id: 13, ingredient: "Parsley" },
        { id: 14, ingredient: "Olive Oil" },
        { id: 15, ingredient: "Vegetable Oil" },
        { id: 16, ingredient: "Brown Sugar" },
        { id: 17, ingredient: "Bread Crumbs" },
        { id: 18, ingredient: "Hot Sauce" },
        { id: 19, ingredient: "BBQ Sauce" },
        { id: 20, ingredient: "Mayonaise" },
        { id: 21, ingredient: "Red Bell Peppers" },
        { id: 22, ingredient: "Jalepenos" },
        { id: 23, ingredient: "Ghost Peppers" },
        { id: 24, ingredient: "Molasses" },
        { id: 25, ingredient: "Spaghetti" },
        { id: 26, ingredient: "Marinara" },
        { id: 27, ingredient: "Parmesan Cheese" },
        { id: 28, ingredient: "Mozzarella Cheese" },
      ]);
    });
};
