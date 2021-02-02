
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_username: 'eg180',
          user_email: 'fakeemail@jenesaispas.com',
          user_password: 'password',
        }
      ]);
    });
};
