exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("recipe").notNull();
    table.text("instructions").notNull();
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("ingredient");
  });

  await knex.schema.createTable("recipe_ingredients", (table) => {
    table.int("recipe_id").notNull();
    table.int("ingredient_id").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
