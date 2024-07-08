/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {DatabaseModule} from '../database/database.module';
import {authProviders} from './auth.providers';
import {UserRepository} from "./repository/user-repository.service";

@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [
        ...authProviders,
        AuthService,
        UserRepository
    ]
})
export class AuthModule {
}
