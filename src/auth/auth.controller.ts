import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiTags} from "@nestjs/swagger";
@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly infoService: AuthService) {}

  @Post('user')
  createUser(@Body() createAuthDto: CreateUserDto) {
    return this.infoService.createUser(createAuthDto);
  }

  @Get('user')
  findUserAll() {
    return this.infoService.findUserAll();
  }

  @Get('user/:id')
  findUserOne(@Param('id') id: string) {
    return this.infoService.findUserOne(+id);
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.infoService.updateUser(+id, updateAuthDto);
  }

  @Delete('user/:id')
  removeUser(@Param('id') id: string) {
    return this.infoService.removeUser(+id);
  }
}
