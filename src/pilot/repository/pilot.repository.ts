import {Inject, Injectable, Logger} from "@nestjs/common";
import {CreatePilotDto} from "../dto/create-pilot.dto";
import {UpdatePilotDto} from "../dto/update-pilot.dto";
import {Repository} from "typeorm";
import {Franchise} from "../entities/franchise.entity";

@Injectable()
export class PilotRepository {
    private readonly logger = new Logger(PilotRepository.name); // Logger 인스턴스 생성
    constructor(
        @Inject('FRANCHISE_REPOSITORY')
        private franchiseRepository: Repository<Franchise>,
    ) {
    }

    async create(creatFranchiseDto: CreatePilotDto) {
        try {
            await this.franchiseRepository.save(creatFranchiseDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async findAll() {
        try {
            return await this.franchiseRepository.find();
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findOne(franchise_id: number) {
        try {
            return await this.franchiseRepository.findOne({where: {franchise_id}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async update(franchise_id: number, updateFranchiseDto: UpdatePilotDto) {
        try {
            await this.franchiseRepository.update(franchise_id, updateFranchiseDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async remove(franchise_id: number) {
        try {
            await this.franchiseRepository.delete(franchise_id);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }
}