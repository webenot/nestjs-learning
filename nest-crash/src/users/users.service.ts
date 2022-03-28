import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './entities';
import { Repository } from 'typeorm';
import { UserEntity } from '../db/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {
  }

  public findAllUsers(name?: string): Promise<User[]> {
    return this._userRepository.find({ where: { ...name && ({ name }) }, relations: [ 'pets' ] });
  }

  public async findUserById(userId: number): Promise<User> {
    try {
      return await this._userRepository.findOneOrFail(userId, { relations: [ 'pets' ] });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public createUser(user: CreateUserDto): Promise<User> {
    const newUser = this._userRepository.create({
      ...user,
    });
    return this._userRepository.save(newUser);
  }

  public async updateUser(user: Partial<User>): Promise<User> {
    const { id, ...restUserData } = user;
    const updatedUser = await this._userRepository.update(id, restUserData);
    return updatedUser.raw[0];
  }

  public async deleteUser(id: number): Promise<User> {
    const user = await this.findUserById(id);
    return this._userRepository.remove(user as UserEntity);
  }
}
