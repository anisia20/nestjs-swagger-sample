import {Injectable, Logger} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {getYmd} from "../utils/util";
import {ResultResponse} from "../common/dto/result-response";
import {Def} from "../common/config/def";
import {UserRepository} from "./repository/user-repository.service";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name); // Logger 인스턴스 생성
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(createAuthDto: CreateUserDto) {
    const result = new ResultResponse();
    const today = getYmd();
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
