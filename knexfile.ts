// Update with your config settings.

import { CONF } from './src/conf';

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: CONF.DB_HOST,
      user: CONF.DB_USER,
      password: CONF.DB_PWD,
      database: CONF.DB_NAME,
    },
  },

};
