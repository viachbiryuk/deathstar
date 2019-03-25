import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseConnection } from '../commons/database.connection';
import { User } from './user';

@Injectable()
export class UsersRepository {

  private modelProps: string[];

  constructor(
    private readonly db: DatabaseConnection,
  ) {
    // get properties list of model
    this.modelProps = Object.getOwnPropertyNames(new User());
  }

  public async findAll(): Promise<User[]> {
    return this.db.connection
      .select()
      .from('users')
      ;
  }

  public async findOne(query): Promise<User> {
    const users = await this.db.connection
      .select()
      .from('users')
      .where(query)
      .limit(1)
    ;

    // throw 404 if no user found
    if (users.length === 0) {
      throw new NotFoundException();
    }

    return users[0];
  }

  public async updateOne(query, payload): Promise<User> {
    const users = await this.db.connection('users')
      .where(query)
      .update(payload)
      .limit(1)
      .returning(this.modelProps)
      ;

    // throw 404 if no user found
    if (users.length === 0) {
      throw new NotFoundException();
    }

    return users[0];
  }

}
