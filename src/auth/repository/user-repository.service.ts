import {Inject, Injectable, Logger} from "@nestjs/common";
import {Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";
import {User} from "../entities/user.info.entity";

@Injectable()
export class UserRepository {
    private readonly logger = new Logger(UserRepository.name); // Logger 인스턴스 생성
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {
    }

    async create(creatServiceInfoDto: CreateUserDto) {
        try {
            await this.userRepository.save(creatServiceInfoDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async findAll() {
        try {
            return await this.userRepository.find();
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findOne(user_code: number) {
        try {
            return await this.userRepository.findOne({where: {user_code}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findOneByUserid(user_id: string) {
        try {
            return await this.userRepository.findOne({where: {user_id}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async update(user_code: number, updateAuthDto: UpdateUserDto) {
        try {
            await this.userRepository.update(user_code, updateAuthDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async remove(user_code: number) {
        try {
            await this.userRepository.delete(user_code);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }
}