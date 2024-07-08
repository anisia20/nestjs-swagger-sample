/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreatePilotDto {
    @ApiProperty({
        example: '테스트',
        description: '신청자 이름',
    })
    @IsString()
    name: string;

    @ApiProperty({
        example: '010-0000-0000',
        description: '신청자 전화번호',
    })
    @IsString()
    tel: string;

    @ApiProperty({
        example: '테스트',
        description: '내용',
    })
    @IsString()
    comment: string;

    @ApiProperty({
        example: '고객 관리',
        description: '에어테이블 테이블 이름',
    })
    @IsString()
    table_name: string;

    @ApiHideProperty()
    airtable_id: number;

    @ApiHideProperty()
    airtable_key: string;

    @ApiHideProperty()
    delete_yn: string;

    @ApiHideProperty()
    create_date: string;

    @ApiHideProperty()
    update_date: string;
}
