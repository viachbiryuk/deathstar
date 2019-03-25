import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { API } from '../commons/api.controller';
import { User } from './user';

@Controller('users')
export class UsersController extends API {

  constructor(
    private readonly usersService: UsersRepository,
  ) {
    super();
  }

  @Get()
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string){
    return this.usersService.findOne({ id });
  }

  @Post(':id')
  @HttpCode(200)
  public async updateOne(@Param('id') id: string, @Body() user): Promise<User> {
    return this.usersService.updateOne({ id }, user);
  }

}
