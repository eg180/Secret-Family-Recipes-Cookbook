// Update with your config settings.

const pg = require('pg');

const localConnection = 'postgresql://localhost/secretrecipesapp';

let connection

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
  connection = process.env.DATABASE_URL
} else {
  connection = localConnection
}

const sharedConfig = {
  client: 'pg',
  connection,
  migrations: { directory: './api/data/migrations'},
  seeds: { directory: './api/data/seeds' },
}

module.exports = {

  development: { ...sharedConfig },
  production: {
    ...sharedConfig,
    pool: { min: 2, max: 10 },
  },
  
};

