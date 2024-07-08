/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
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

    @ApiProperty({
        example: '홍길스',
        description: '유저 명',
    })
    @IsString()
    user_name: string;

    @ApiProperty({
        example: 'N',
        description: '삭제여부',
    })
    @IsString()
    delete_yn: string;

    @ApiHideProperty()
    create_date: string;

    @ApiHideProperty()
    update_date: string;

}
