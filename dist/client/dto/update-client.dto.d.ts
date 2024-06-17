import { CreateClientDto } from './create-client.dto';
declare const UpdateClientDto_base: import("@nestjs/common").Type<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
    name: string;
    email: string;
    cpf: string;
    fone: string;
    celular: string;
    status: boolean;
}
export {};
