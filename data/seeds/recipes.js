exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipe: "Easy, Cheap Spaghetti",
          instructions:
            "Boil Spaghetti until Al Dente.  In a separate pan, heat Marinara and add basil.  Combine ingredients and top with parmesan cheese.",
        },
        {
          id: 2,
          recipe: "Poached Eggs",
          instructions:
            "Boil water.  Crack egg and drop into boiling water.  Use strainer and remove egg from water after 5 minutes.",
        },
        {
          id: 3,
          recipe: "Grilled BBQ Chicken",
          instructions:
            "Heat grill on medium heat.  Place chicken on grill, turning every 2-3 minutes.  Apply BBQ sauce onto chicken within the last 5 minutes of grill time. Serve.",
        },
        {
          id: 4,
          recipe: "Chicken Parmesan",
          instructions:
            "Boil spaghetti until al dente.  Grill chicken and melt mozzarella cheese on chicken.  Heat up marinara sauce in a sauce pan.  Add chicken and sauce to spaghetti.",
        },
      ]);
    });
};
