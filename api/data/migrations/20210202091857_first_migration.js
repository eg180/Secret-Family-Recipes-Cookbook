const tables = [
  'roles',
  'users',
  'recipes',
  'ingredients',
  'units',
  'recipe_ingredients',
  'recipe_steps',
  'step_ingredients',
  'tags',
  'categories',
  'recipe_categories',
  'user_recipes',
  'recipe_tags'
]

const [
  roles,
  users,
  recipes,
  ingredients,
  units,
  recipe_ingredients,
  recipe_steps,
  step_ingredients,
  tags,
  categories,
  recipe_categories,
  user_recipes,
  recipe_tags
] = tables

exports.up = async (knex) => {
  await knex.schema
    .createTable(roles, (roles) => {
      roles.increments('id')
      roles.string('role_type')
        .unique() 
    })
    .createTable(users, (users) => {
      users.increments('user_id')
      users.string('user_username', 256).notNullable()
        .unique()
      users.string('user_email', 256).notNullable()
        .unique()
      users.integer('user_role')
        .unsigned()
        .references('id')
        .inTable('roles')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      users.string('user_password', 128).notNullable()
      users.timestamps(false, true)
    })
    .createTable(recipes, (recipes) => {
      recipes.increments('id')
      recipes.integer('recipe_id')
        .unsigned()
        .unique()
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
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      recipe_ingredients.string('quantity', 128)
      recipe_ingredients.integer('unit')
        .unsigned()
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
      recipe_steps.string('step_number', 128)
      recipe_steps.string('step_instructions', 500)
      recipe_steps.timestamps(false, true)
    })
    .createTable(step_ingredients, (step_ingredients) => {
      step_ingredients.increments('step_ingredient_id')
      step_ingredients.integer('recipe_step_id')
        .unsigned()
        .references('step_id')
        .inTable('recipe_steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      step_ingredients.integer('ingredient_id')
        .unsigned()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      step_ingredients.timestamps(false, true)
    })
    .createTable(tags, (tags) => {
      tags.increments('tag_id')
      tags.string('name', 128)
    })
    .createTable(categories, (categories) => {
      categories.increments('category_id')
      categories.string('category', 128)
    })
    .createTable(recipe_categories, (recipe_categories ) => {
      recipe_categories.increments()
      recipe_categories.integer('recipe_category_id')
        .unsigned()
        .unique()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      recipe_categories.integer('category_id')
        .unsigned()
        .references('category_id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable(user_recipes, (user_recipes) => {
      user_recipes.increments()
      user_recipes.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      user_recipes.integer('recipe_id')
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      user_recipes.string('title', 128)
        .notNullable()
      user_recipes.string('source', 128)
      user_recipes.integer('category')
        .unsigned()
        .references('category_id')
        .inTable('categories')
        .notNullable()
      user_recipes.timestamps(false, true)
    })
    .createTable(recipe_tags, (recipe_tags) => {
      recipe_tags.increments('recipe_tag_id')
      recipe_tags.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      recipe_tags.integer('tag_id')
        .unsigned()
        .references('tag_id')
        .inTable('tags')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')


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
