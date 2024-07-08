import {Inject, Injectable, Logger} from "@nestjs/common";
import {Repository} from "typeorm";
import {AirtableInfo} from "../entities/airtable.info.entity";
import {ServiceInfo} from "../entities/service.info.entity";
import {CreateServiceInfoDto} from "../dto/create-service-info.dto";
import {UpdateServiceInfoDto} from "../dto/update-service-info.dto";
import {CreateAirtableInfoDto} from "../dto/create-airtable-info.dto";
import {UpdateAirtableInfoDto} from "../dto/update-airtable-info.dto";

@Injectable()
export class InfoRepository {
    private readonly logger = new Logger(InfoRepository.name); // Logger 인스턴스 생성
    constructor(
        @Inject('AIRTABLE_REPOSITORY')
        private airtableInfoRepository: Repository<AirtableInfo>,
        @Inject('SERVICE_REPOSITORY')
        private serviceInfoRepository: Repository<ServiceInfo>,
    ) {
    }

    async createServiceInfo(creatServiceInfoDto: CreateServiceInfoDto) {
        try {
            await this.serviceInfoRepository.save(creatServiceInfoDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async findServiceInfoAll() {
        try {
            return await this.serviceInfoRepository.find();
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findServiceInfoOne(service_id: number) {
        try {
            return await this.serviceInfoRepository.findOne({where: {service_id}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findServiceInfoOneByDomain(domain: string) {
        try {
            return await this.serviceInfoRepository.findOne({where: {domain}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async updateServiceInfo(service_id: number, updateServiceDto: UpdateServiceInfoDto) {
        try {
            await this.serviceInfoRepository.update(service_id, updateServiceDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async removeServiceInfo(service_id: number) {
        try {
            await this.serviceInfoRepository.delete(service_id);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async createAirtableInfo(creatAirtableDto: CreateAirtableInfoDto) {
        try {
            return await this.airtableInfoRepository.save(creatAirtableDto);
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async findAirtableInfoAll() {
        try {
            return await this.airtableInfoRepository.find();
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findAirtableInfoOne(airtable_id: number) {
        try{
            return await this.airtableInfoRepository.findOne({where: {airtable_id}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async findAirtableInfoOneByServiceIdAndTableName(service_id: number, table_name: string) {
        try{
            return await this.airtableInfoRepository.findOne({where: {service_id, table_name}});
        } catch (e) {
            this.logger.debug(e);
            return;
        }
    }

    async updateAirtableInfo(airtable_id: number, updateAirtableInfoDto: UpdateAirtableInfoDto) {
        try{
            await this.airtableInfoRepository.update(airtable_id, updateAirtableInfoDto);
            return 0;
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }

    async removeAirtableInfo(airtable_id: number) {
        try{
            return await this.airtableInfoRepository.delete(airtable_id);
        } catch (e) {
            this.logger.debug(e);
            return -1;
        }
    }
}