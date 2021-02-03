
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_categories').insert([
        {
          recipe_category_id: 1,
          category_id: 4
        }
      ]);
    });
};
