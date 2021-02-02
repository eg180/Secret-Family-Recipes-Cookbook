const tables = [
  'users',
  'recipes',
  'ingredients',
  'units',
  'recipe_ingredients',
  'recipe_steps',
  'step_ingredients',
]

const [
  users,
  recipes,
  ingredients,
  units,
  recipe_ingredients,
  recipe_steps,
  step_ingredients,
] = tables

exports.up = async (knex) => {
  await knex.schema
    .createTable(users, (users) => {
      users.increments('user_id')
      users.string('user_username', 256).notNullable()
      users.string('user_email', 256).notNullable()
      users.string('user_password', 128).notNullable()
      users.timestamps(false, true)
    })
    .createTable(recipes, (recipes) => {
      recipes.increments('recipe_id')
      recipes.string('recipe_name', 128).notNullable()
      recipes.timestamps(false, true)
    })
    .createTable(ingredients, (ingredients) => {
      ingredients.increments('ingredient_id')
      ingredients.string('ingredient_name', 128).notNullable()
      ingredients.timestamps(false, true)
    })
    .createTable(units, (units) => {
      units.increments('unit_id')
      units.string('unit', 512).notNullable()
      units.timestamps(false, true)
    })
    .createTable(recipe_ingredients, (recipe_ingredients) => {
      recipe_ingredients.increments('recipe_ingredient_id')
      recipe_ingredients.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      recipe_ingredients.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      recipe_ingredients.integer('quantity')
        .unsigned()
        .notNullable()
      recipe_ingredients.integer('unit')
        .unsigned()
        .notNullable()
        .references('unit_id')
        .inTable('units')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable(recipe_steps, (recipe_steps) => {
      recipe_steps.increments('step_id')
      recipe_steps.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      recipe_steps.integer('step_number')
        .unsigned()
        .notNullable()
        .defaultTo(1)
      recipe_steps.string('step_instructions', 255)
      recipe_steps.timestamps(false, true)
    })
    .createTable(step_ingredients, (step_ingredients) => {
      step_ingredients.increments('step_ingredients_id')
      step_ingredients.integer('recipe_step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('recipe_steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      step_ingredients.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      step_ingredients.timestamps(false, true)
    })

  await knex.raw(`
    CREATE OR REPLACE FUNCTION update_timestamp() RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
    $$
    BEGIN
      NEW.updated_at = CURRENT_TIMESTAMP;
      RETURN NEW;
    END;
    $$;
  `)

  for (let table of tables) {
    await knex.raw(`
      CREATE TRIGGER update_timestamp
      BEFORE UPDATE
      ON ${table}
      FOR EACH ROW
      EXECUTE PROCEDURE update_timestamp();
    `);
  }

  await knex.raw(`
    ALTER TABLE users
    ADD CONSTRAINT proper_email
    CHECK (user_email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
  `)
}

exports.down = async (knex) => {
  await knex.raw(`
    DROP FUNCTION IF EXISTS update_timestamp() CASCADE;
  `)

  for (let i = tables.length - 1; i >= 0; i--) {
    await knex.schema.dropTableIfExists(tables[i])
  }
}