/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty({
        example: 'test',
        description: '유저 아이디',
    })
    @IsString()
    user_id: string;

    @ApiProperty({
        example: 'test123!@#',
        description: '유저 패스워드',
    })
    @IsString()
    user_pass: string;
}
