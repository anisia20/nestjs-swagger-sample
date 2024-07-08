/* eslint-disable prettier/prettier */
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreateAirtableInfoDto {
    @ApiProperty({
        example: 0,
        description: '서비스 아이디',
    })
    @IsNumber()
    service_id: number;

    @ApiProperty({
        example: 'base123123',
        description: '베이스 아이디',
    })
    @IsString()
    base_id: string;

    @ApiProperty({
        example: 'tb123123123',
        description: '테이블 아이디',
    })
    @IsString()
    table_id: string;

    @ApiProperty({
        example: '유닛블랙테스트',
        description: '베이스명',
    })
    @IsString()
    base_name: string;

    @ApiProperty({
        example: '접수',
        description: '테이블명',
    })
    @IsString()
    table_name: string;

    @ApiProperty({
        example: '123123123123',
        description: 'API토큰',
    })
    @IsString()
    api_token: string;

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
