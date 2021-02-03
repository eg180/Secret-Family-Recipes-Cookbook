
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category: 'Breakfast'},
        {category: 'Brunch'},
        {category: 'Lunch'},
        {category: 'Dinner'},
        {category: 'Dessert'},
        {category: 'Sides'}
      ]);
    });
};
