import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', (table) => {
      table.bigIncrements('id');
      table.string('email').notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();

      table.unique(['email']);
    }),
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
  ]);
}
