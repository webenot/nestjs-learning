import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './entities';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Marius' },
    { id: 1, name: 'Nickole' },
  ];

  public findAll (name?: string): User[] {
    if (name) {
      return this.users.filter((user) =>user.name.toLowerCase() === name.toLowerCase());
    }
    return this.users;
  }

  public findById (userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  public createUser (user: CreateUserDto): User {
    const newUser: User = { ...user, id: Date.now() };
    this.users.push(newUser);
    return newUser;
  }
}
