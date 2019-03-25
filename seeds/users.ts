import * as Knex from 'knex';

exports.seed = async (knex: Knex): Promise<any> => {
  const tableName = 'users';
  // Deletes ALL existing entries
  await knex(tableName).del();
  // Inserts seed entries
  await knex(tableName).insert([
    {
      email: 'u1@gmail.com',
      first_name: 'Darth',
      last_name: 'Vader',
    },
    {
      email: 'u2@gmail.com',
      first_name: 'Luke',
      last_name: 'Skywalker',
    },
    {
      email: 'u3@gmail.com',
      first_name: 'Leia',
      last_name: 'Organa',
    },
  ]);
};
