import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto';
import { User } from './entities';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor (
    private readonly _usersService: UsersService,
  ) {
  }

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  public getUsers (@Query('name') name?: string): Promise<User[]> {
    return this._usersService.findAllUsers(name);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @Get(':id')
  public async getUserById (@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this._usersService.findUserById(id);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Put()
  public createUser (@Body() body: CreateUserDto): Promise<User> {
    return this._usersService.createUser(body);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Patch()
  public updateUser (@Body() body: UserDto): Promise<User> {
    return this._usersService.updateUser(body);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Delete(':id')
  public deleteUser (@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this._usersService.deleteUser(id);
  }
}
