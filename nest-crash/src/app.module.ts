import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';
import config from '../ormconfig';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    TypeOrmModule.forRoot(config),
    PetsModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
