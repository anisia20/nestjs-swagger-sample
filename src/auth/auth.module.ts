/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {DatabaseModule} from '../database/database.module';
import {authProviders} from './auth.providers';
import {UserRepository} from "./repository/user-repository.service";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {RefreshTokenService} from "./service/refresh.token.service";

@Module({
    imports: [
        DatabaseModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('jwt.secret'),
                signOptions: { expiresIn: '60s' },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [
        ...authProviders,
        AuthService,
        UserRepository,
        RefreshTokenService
    ]
})
export class AuthModule {
}
