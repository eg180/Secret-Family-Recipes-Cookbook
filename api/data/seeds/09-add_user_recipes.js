
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_recipes').insert([
        {
          user_id: 1,
          recipe_id: 1
        }
      ]);
    });
};
