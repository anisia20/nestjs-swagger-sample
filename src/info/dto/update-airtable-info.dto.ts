/* eslint-disable prettier/prettier */
import {ApiHideProperty, ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateServiceInfoDto } from './create-service-info.dto';
import {IsBoolean, IsNumber, IsString} from 'class-validator';
import {CreateAirtableInfoDto} from "./create-airtable-info.dto";

export class UpdateAirtableInfoDto extends PartialType(CreateAirtableInfoDto) {
    @IsNumber()
    service_id: number;

    @IsString()
    base_id: string;

    @IsString()
    table_id: string;

    @IsString()
    base_name: string;

    @IsString()
    table_name: string;

    @IsString()
    api_token: string;

    @IsString()
    delete_yn: string;

    @ApiHideProperty()
    update_date: string;
}
