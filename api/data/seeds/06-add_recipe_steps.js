
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {
          recipe_id: 1,
          step_number: '1',
          step_instructions: 'Preheat the oven for 375˚F (190˚C).'
        },
        {
          recipe_id: 1,
          step_number: '2',
          step_instructions: 'Slice the eggplant, tomatoes, squash, and zucchini into approximately ¹⁄₁₆-inch (1-mm) rounds, then set aside.'
        },
        {
          recipe_id: 1,
          step_number: '3',
          step_instructions: 'Make the sauce: Heat the olive oil in a 12-inch (30-cm) oven-safe pan over medium-high heat. Sauté the onion, garlic, and bell peppers until soft, about 10 minutes. Season with salt and pepper, then add the crushed tomatoes. Stir until the ingredients are fully incorporated. Remove from heat, then add the basil. Stir once more, then smooth the surface of the sauce with a spatula.'
        },
        {
          recipe_id: 1,
          step_number: '4',
          step_instructions: 'Arrange the sliced veggies in alternating patterns, (for example, eggplant, tomato, squash, zucchini) on top of the sauce from the outer edge to the middle of the pan. Season with salt and pepper.'
        },
        {
          recipe_id: 1,
          step_number: '5',
          step_instructions: 'Make the herb seasoning: In a small bowl, mix together the basil, garlic, parsley, thyme, salt, pepper, and olive oil. Spoon the herb seasoning over the vegetables.'
        },
        {
          recipe_id: 1,
          step_number: '6',
          step_instructions: 'Cover the pan with foil and bake for 40 minutes. Uncover, then bake for another 20 minutes, until the vegetables are softened.'
        },
        {
          recipe_id: 1,
          step_number: '7',
          step_instructions: 'Serve while hot as a main dish or side. The ratatouille is also excellent the next day--cover with foil and reheat in a 350˚F (180˚C) oven for 15 minutes, or simply microwave to desired temperature.'
        },
        {
          recipe_id: 2,
          step_number: '1',
          step_instructions: 'Spread 1 tablespoon of jelly on 1 slice of bread'
        },
        {
          recipe_id: 2,
          step_number: '2',
          step_instructions: 'Now you get 1 tablespoon peanut butter and spread it on the other slice of bread.'
        },
        {
          recipe_id: 2,
          step_number: '3',
          step_instructions: 'Place one slice of bread on the other one, cut in half (if you like), and enjoy!'
        },

        
      ]);
    });
};
