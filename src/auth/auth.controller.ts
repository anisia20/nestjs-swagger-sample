import {Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthDto} from "./dto/auth.dto";
import {JwtAuthGuard} from "../common/config/jwt.auth.guard";
@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  auth(@Body() authDto: AuthDto) {
    return this.authService.auth(authDto);
  }
  @Post('token')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  refreshToken(@Headers('authorization') authHeader: string) {
    const token = authHeader.split(' ')[1]; // 'Bearer ' 부분을 제거하고 토큰만 추출
    return this.authService.refreshToken(token);
  }

  @Post('user')
  createUser(@Body() createAuthDto: CreateUserDto) {
    return this.authService.createUser(createAuthDto);
  }

  @Get('user')
  findUserAll() {
    return this.authService.findUserAll();
  }

  @Get('user/:id')
  findUserOne(@Param('id') id: string) {
    return this.authService.findUserOne(+id);
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.updateUser(+id, updateAuthDto);
  }

  @Delete('user/:id')
  removeUser(@Param('id') id: string) {
    return this.authService.removeUser(+id);
  }
}
