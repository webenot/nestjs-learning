import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../db/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ UserEntity ]),
  ],
  controllers: [ UsersController ],
  providers: [ UsersService ],
})
export class UsersModule {
}
