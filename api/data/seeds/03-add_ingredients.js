
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'olive oil'},
        {ingredient_name: 'onion(s)'},
        {ingredient_name: 'garlic'},
        {ingredient_name: 'red bell pepper(s)'},
        {ingredient_name: 'yellow bell pepper(s)'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'},
        {ingredient_name: 'crushed tomatoe(s)'},
        {ingredient_name: 'fresh basil'},
        {ingredient_name: 'thyme'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'roma tomatoe(s)'},
        {ingredient_name: 'dried basil'},
        {ingredient_name: 'thyme'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'eggplant(s)'},
        {ingredient_name: 'yellow squash(es)'},
        {ingredient_name: 'zucchini(s)'},
        {ingredient_name: 'chopped fresh parsley'},
        {ingredient_name: 'squash'}


      ]);
    });
};
