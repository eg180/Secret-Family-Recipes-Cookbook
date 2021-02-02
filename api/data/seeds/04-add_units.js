
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {unit: 'clove(s)'},
        {unit: 'tablespoon(s)'},
        {unit: 'pinch'},
        {unit: 'can(s)'},
        {unit: 'cup(s)'},
        {unit: 'oz'},
        {unit: 'lb(s)'},
        {unit: 'teaspoon(s)'},
        {unit: 'dollop(s)'}
      ]);
    });
};
