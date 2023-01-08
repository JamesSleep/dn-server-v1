import { PickType } from '@nestjs/swagger';
import { User } from '../user.entity';

export class UserReadOnlyDto extends User {}

export class UserCreateDto extends PickType(User, [
  'email',
  'name',
  'nickname',
  'password',
  'phoneNumber',
]) {}

export class UserUpdateDto extends PickType(User, [
  'nickname',
  'name',
  'phoneNumber',
]) {}
