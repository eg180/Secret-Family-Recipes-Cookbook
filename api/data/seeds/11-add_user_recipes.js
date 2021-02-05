
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_recipes').insert([
        {
          user_id: 2,
          recipe_id: 1,
          title: "A fun French dish!",
          source: "family recipe",
          category: 4
        },
        {
          user_id: 1,
          recipe_id: 2,
          title: "A classic pb&j",
          source: "my soul",
          category: 7
        },        
      ]);
    });
};
