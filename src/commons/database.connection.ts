import { Injectable, OnModuleInit } from '@nestjs/common';
import * as knex from 'knex';
import { CONF } from '../conf';
import * as knexfile from '../../knexfile';

@Injectable()
export class DatabaseConnection implements OnModuleInit {

  public connection;

  public onModuleInit(): any {
    // connects to a certain db, based on NDOE_ENV
    this.connection = knex(knexfile[CONF.NODE_ENV]);
  }

}
