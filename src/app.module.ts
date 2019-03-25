import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonsModule } from './commons/commons.module';

@Module({
  imports: [
    UsersModule,
    CommonsModule,
  ],
})
export class AppModule {}
