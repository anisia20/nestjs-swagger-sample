import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiTags} from "@nestjs/swagger";
import {AuthDto} from "./dto/auth.dto";
@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  createAuth(@Body() authDto: AuthDto) {
    return this.authService.auth(authDto);
  }
  @Post('token')
  createToken(@Body() createAuthDto: CreateUserDto) {
    return this.authService.createUser(createAuthDto);
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
