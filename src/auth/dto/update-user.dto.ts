/* eslint-disable prettier/prettier */
import {ApiHideProperty, ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    user_id: string;

    @IsString()
    user_pass: string;

    @IsString()
    user_replace_pass: string;

    @IsString()
    user_name: string;

    @IsString()
    delete_yn: string;

    @ApiHideProperty()
    update_date: string;
}
