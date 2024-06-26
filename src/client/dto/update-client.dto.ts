/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    cpf: string;

    @IsString()
    fone: string;

    @IsString()
    celular: string;

    @IsBoolean()
    status: boolean;
}
