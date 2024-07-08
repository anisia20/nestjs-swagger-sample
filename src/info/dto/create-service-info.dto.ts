/* eslint-disable prettier/prettier */
import { IsBoolean, IsString } from 'class-validator';
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreateServiceInfoDto {
    @ApiProperty({
        example: '유닛블랙',
        description: '서비스명',
    })
    @IsString()
    service_name: string;

    @ApiProperty({
        example: 'pilot.co.kr',
        description: '도메인명',
    })
    @IsString()
    domain: string;

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
