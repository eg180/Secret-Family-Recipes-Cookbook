
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_username: 'eg180',
          user_email: 'fakeemail@jenesaispas.com',
          user_role: 1,
          user_password: 'password'
        },
        {
          user_username: 'no-thing',
          user_email: 'delphy@jenesaispas.com',
          user_role: 2,
          user_password: 'password'
        }
      ]);
    });
};
