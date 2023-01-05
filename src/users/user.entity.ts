import { IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends CommonEntity {
  @IsNotEmpty()
  @Column()
  email: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  nickname: string;

  @IsNotEmpty()
  @IsPhoneNumber('KR')
  @Column()
  phoneNumber: string;
}
