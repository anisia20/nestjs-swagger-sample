import {Injectable, Logger} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {encryptPassword, getYmd, validatePassword} from "../utils/util";
import {ResultResponse} from "../common/dto/result-response";
import {Def} from "../common/config/def";
import {UserRepository} from "./repository/user-repository.service";
import {AuthDto} from "./dto/auth.dto";
import {JwtService} from "@nestjs/jwt";
import {RefreshTokenService} from "./service/refresh.token.service";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name); // Logger 인스턴스 생성
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly refreshTokenService: RefreshTokenService, // 리프레시 토큰 서비스 주입
  ) {}

  async auth(authDto: AuthDto) {
    const result = new ResultResponse();
    this.logger.log(`auth start!! D=${authDto.user_id}`);
    const data = await this.userRepository.findOneByUserid(authDto.user_id);
    if(!data){
      this.logger.log(`auth fail!! D=${authDto.user_id}`);
      await Def.fail(result, Def.R_201);
      return result
    }
    const isPasswordValid = await validatePassword(authDto.user_pass, data.user_pass);

    if(!isPasswordValid){
      this.logger.log(`auth not match password!! D=${authDto.user_id}`);
      await Def.fail(result, Def.R_202);
      return result
    }

    const payload = {
      user_code: data.user_code,
      user_name: data.user_name,
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = await this.refreshTokenService.generateRefreshToken(payload);

    const response = {
      accessToken,
      refreshToken
    };
    await Def.successData(result, response);
    return result;
  }

  async refreshToken(token: string){
    const result = new ResultResponse();

    const decoded = this.jwtService.verify(token, {
      secret: this.configService.get<string>('jwt.secret')
    });
    const payload = {
      user_code: decoded.user_code,
      user_name: decoded.user_name,
    };
    const accessToken = this.jwtService.sign(payload);
    const response = {
      accessToken
    };
    await Def.successData(result, response);
    return result;
  }

  async createUser(createAuthDto: CreateUserDto) {
    const result = new ResultResponse();
    const today = getYmd();
    const encPassword = await encryptPassword(createAuthDto.user_pass);

    createAuthDto.user_pass = encPassword;
    createAuthDto.create_date = today;
    createAuthDto.update_date = today;
    this.logger.log(`createUser start!! D=${createAuthDto.user_id}`);
    const n_res = await this.userRepository.create(createAuthDto);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async findUserAll() {
    const result = new ResultResponse();
    this.logger.log(`findUserAll start!!`);
    const data = await this.userRepository.findAll();
    await Def.successData(result, data);
    return result;
  }

  async findUserOne(user_code: number) {
    const result = new ResultResponse();
    this.logger.log(`findUserOne start!! C=${user_code}`);
    const data = await this.userRepository.findOne(user_code);
    await Def.successData(result, data);
    return result;
  }

  async findUserOneByUserid(user_id: string) {
    const result = new ResultResponse();
    this.logger.log(`findUserOneByUserid start!! ID=${user_id}`);
    const data = await this.userRepository.findOneByUserid(user_id);
    await Def.successData(result, data);
    return result;
  }

  async updateUser(user_id: number, updateAuthDto: UpdateUserDto) {
    const result = new ResultResponse();
    const today = getYmd();
    updateAuthDto.update_date = today;
    this.logger.log(`updateUser start!! ID=${user_id}`);
    const n_res = await this.userRepository.update(user_id, updateAuthDto);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async removeUser(user_code: number) {
    const result = new ResultResponse();
    this.logger.log(`removeUser start!! ID=${user_code}`);
    const n_res = await this.userRepository.remove(user_code);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

}
