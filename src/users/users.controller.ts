import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  signUp(@Body() body: UserCreateDto) {
    return this.usersService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() body: UserUpdateDto) {
    return this.usersService.update(id, body);
  }

  @Delete('/:id')
  async withdraw(@Param('id') id: number) {
    return await this.usersService.remove(id);
  }
}
