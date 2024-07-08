import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshTokenService {
  private jwtService: JwtService;

  constructor(private configService: ConfigService) {
    const secret = this.configService.get<string>('jwt.secret');
    console.log(`JWT Secret: ${secret}`); // 로깅 추가
    this.jwtService = new JwtService({
      secret: secret,
      signOptions: { expiresIn: '7d' }, // 리프레시 토큰의 만료 시간
    });
  }

  async generateRefreshToken(payload: any): Promise<string> {
    return this.jwtService.sign({ data: payload });
  }
}