
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_id: 1,
          recipe_name: 'ratatouille'
        },
                {
          recipe_id: 2,
          recipe_name: 'pb&j'
        }
      ]);
    });
};
