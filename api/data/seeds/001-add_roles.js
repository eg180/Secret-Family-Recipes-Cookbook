
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {
          role_type: "admin"
        },
        {
          role_type: "user"
        }
      ]);
    });
};
