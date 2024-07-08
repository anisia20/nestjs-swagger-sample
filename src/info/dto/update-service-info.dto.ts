/* eslint-disable prettier/prettier */
import {ApiHideProperty, ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateServiceInfoDto } from './create-service-info.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateServiceInfoDto extends PartialType(CreateServiceInfoDto) {
    @IsString()
    service_name: string;

    @IsString()
    domain: string;

    @IsString()
    delete_yn: string;

    @ApiHideProperty()
    update_date: string;
}
