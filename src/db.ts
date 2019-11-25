import knex from 'knex';

export const db = knex({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    // password: 'postgres',
    database: 'moviemap',
  },
  pool: { min: 0, max: 10 },
});
