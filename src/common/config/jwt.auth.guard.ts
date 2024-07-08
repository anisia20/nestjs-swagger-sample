import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService, private readonly configService: ConfigService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return false;
        }

        const token = authHeader.split(' ')[1];
        try {
            const decoded = this.jwtService.verify(token, {
                secret: this.configService.get<string>('jwt.secret'),
            });
            request.user_code = decoded.user_code;
            request.user_name = decoded.user_name;
            return true;
        } catch (error) {
            return false;
        }
    }
}