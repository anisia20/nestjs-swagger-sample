/* eslint-disable prettier/prettier */
import { IsBoolean, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateClientDto {

    @ApiProperty({
        example: 'jsm',
        description: 'The name of the client',
    })
    @IsString()
    nome: string;

    @ApiProperty({
        example: 'jsm@example.com',
        description: 'The email address of the client',
    })
    @IsString()
    email: string;

    @ApiProperty({
        example: '123.456.789-00',
        description: 'The CPF number of the client',
    })
    @IsString()
    cpf: string;

    @ApiProperty({
        example: '123-456-7890',
        description: 'The phone number of the client',
    })
    @IsString()
    fone: string;

    @ApiProperty({
        example: '987-654-3210',
        description: 'The mobile number of the client',
    })
    @IsString()
    celular: string;

    @ApiProperty({
        example: true,
        description: 'The status of the client',
    })
    @IsBoolean()
    status: boolean;

}
