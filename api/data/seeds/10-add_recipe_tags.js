
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_tags').insert([
        {
          recipe_id: 1,
          tag_id: 1

        }
      ]);
    });
};
