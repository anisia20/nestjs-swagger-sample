/* eslint-disable prettier/prettier */
import {ApiHideProperty, ApiProperty, PartialType} from '@nestjs/swagger';
import { CreatePilotDto } from './create-pilot.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdatePilotDto extends PartialType(CreatePilotDto) {
    @IsString()
    name: string;

    @IsString()
    tel: string;

    @IsString()
    comment: string;

    @ApiHideProperty()
    update_date: string;
}
