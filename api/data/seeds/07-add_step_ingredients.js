
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {
          recipe_step_id: 2,
          ingredient_id: 16
        },
        {
          recipe_step_id: 2,
          ingredient_id: 12
        },
        {
          recipe_step_id: 2,
          ingredient_id: 20
        }
        ,{
          recipe_step_id: 2,
          ingredient_id: 18
        },
        {
          recipe_step_id: 3,
          ingredient_id: 1
        }
        ,{
          recipe_step_id: 3,
          ingredient_id: 7
        },
        {
          recipe_step_id: 3,
          ingredient_id: 2
        },
        {
          recipe_step_id: 3,
          ingredient_id: 3
        },
        {
          recipe_step_id: 3,
          ingredient_id: 4
        },
        {
          recipe_step_id: 3,
          ingredient_id: 5
        },
        {
          recipe_step_id: 3,
          ingredient_id: 8
        },
        {
          recipe_step_id: 4,
          ingredient_id: 6
        },
        {
          recipe_step_id: 4,
          ingredient_id: 7
        },
        {
          recipe_step_id: 5,
          ingredient_id: 9
        }, 
        {
          recipe_step_id: 5,
          ingredient_id: 3
        },
        {
          recipe_step_id: 5,
          ingredient_id: 19
        },
        {
          recipe_step_id: 5,
          ingredient_id: 14
        },
        {
          recipe_step_id: 5,
          ingredient_id: 11
        },
        {
          recipe_step_id: 5,
          ingredient_id: 7
        },
        {
          recipe_step_id: 5,
          ingredient_id: 1
        },
        {
          recipe_step_id: 1,
          ingredient_id: 21
        },
        {
          recipe_step_id: 1,
          ingredient_id: 22
        },
        {
          recipe_step_id: 1,
          ingredient_id: 21
        },
        {
          recipe_step_id: 2,
          ingredient_id: 23
        }



      ]);
    });
};
