
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          ingredient_id: 16,
          quantity: '2'
        },
        {
          recipe_id: 1,
          ingredient_id: 12,
          quantity: '6'
        },
        {
          recipe_id: 1,
          ingredient_id: 17,
          quantity: '2'
        },
        {
          recipe_id: 1,
          ingredient_id: 18,
          quantity: '2'
        },
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: '4',
          unit: 2
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: '1'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: '4',
          unit: 1
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: '1'
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: '1'
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
        },
        {
          recipe_id: 1,
          ingredient_id: 7,
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: '28',
          unit: 6
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          quantity: '4',
          unit: 6
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          quantity: '1',
          unit: 8
        },
        {
          recipe_id: 1,
          ingredient_id: 19,
          quantity: '1',
          unit: 2
        },
        {
          recipe_id: 1,
          ingredient_id: 10,
          quantity: '2',
          unit: 8
        }
        
        
        
      ]);
    });
};
