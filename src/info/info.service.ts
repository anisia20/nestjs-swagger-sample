import {Injectable, Logger} from '@nestjs/common';
import { CreateServiceInfoDto } from './dto/create-service-info.dto';
import { UpdateServiceInfoDto } from './dto/update-service-info.dto';
import {CreateAirtableInfoDto} from "./dto/create-airtable-info.dto";
import {UpdateAirtableInfoDto} from "./dto/update-airtable-info.dto";
import {getYmd} from "../utils/util";
import {ResultResponse} from "../common/dto/result-response";
import {Def} from "../common/config/def";
import {InfoRepository} from "./repository/info.repository";

@Injectable()
export class InfoService {
  private readonly logger = new Logger(InfoService.name); // Logger 인스턴스 생성
  constructor(
    private readonly infoRepository: InfoRepository,
  ) {}

  async createServiceInfo(creatServiceInfoDto: CreateServiceInfoDto) {
    const result = new ResultResponse();
    const today = getYmd();
    creatServiceInfoDto.create_date = today;
    creatServiceInfoDto.update_date = today;
    this.logger.log(`createServiceInfo start!! D=${creatServiceInfoDto.domain}`);
    const n_res = await this.infoRepository.createServiceInfo(creatServiceInfoDto);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async findServiceInfoAll() {
    const result = new ResultResponse();
    this.logger.log(`findServiceInfoAll start!!`);
    const data = await this.infoRepository.findServiceInfoAll();
    await Def.successData(result, data);
    return result;
  }

  async findServiceInfoOne(service_id: number) {
    const result = new ResultResponse();
    this.logger.log(`findServiceInfoAll start!! ID=${service_id}`);
    const data = await this.infoRepository.findServiceInfoOne(service_id);
    await Def.successData(result, data);
    return result;
  }

  async updateServiceInfo(service_id: number, updateServiceDto: UpdateServiceInfoDto) {
    const result = new ResultResponse();
    const today = getYmd();
    updateServiceDto.update_date = today;
    this.logger.log(`updateServiceInfo start!! ID=${service_id}`);
    const n_res = await this.infoRepository.updateServiceInfo(service_id, updateServiceDto);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async removeServiceInfo(service_id: number) {
    const result = new ResultResponse();
    this.logger.log(`removeServiceInfo start!! ID=${service_id}`);
    const n_res = await this.infoRepository.removeServiceInfo(service_id);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async createAirtableInfo(creatAirtableDto: CreateAirtableInfoDto) {
    const result = new ResultResponse();
    const today = getYmd();
    creatAirtableDto.create_date = today;
    creatAirtableDto.update_date = today;
    this.logger.log(`createAirtableInfo start!! N=${creatAirtableDto.base_name}`);
    const n_res =  await this.infoRepository.createAirtableInfo(creatAirtableDto);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async findAirtableInfoAll() {
    const result = new ResultResponse();
    this.logger.log(`findAirtableInfoAll start!!`);
    const data = await this.infoRepository.findAirtableInfoAll();
    await Def.successData(result, data);
    return result;
  }

  async findAirtableInfoOne(airtable_id: number) {
    const result = new ResultResponse();
    this.logger.log(`findAirtableInfoOne start!! ID=${airtable_id}`);
    const data = await this.infoRepository.findAirtableInfoOne(airtable_id);
    await Def.successData(result, data);
    return result;
  }

  async updateAirtableInfo(airtable_id: number, updateAirtableInfoDto: UpdateAirtableInfoDto) {
    const result = new ResultResponse();
    const today = getYmd();
    updateAirtableInfoDto.update_date = today;
    this.logger.log(`updateAirtableInfo start!! ID=${airtable_id}`);
    const n_res = await this.infoRepository.updateAirtableInfo(airtable_id, updateAirtableInfoDto);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }

  async removeAirtableInfo(airtable_id: number) {
    const result = new ResultResponse();
    this.logger.log(`removeAirtableInfo start!! ID=${airtable_id}`);
    const n_res = await this.infoRepository.removeAirtableInfo(airtable_id);
    if(n_res < 0){
      await Def.fail(result, Def.R_900);
      return result
    }

    await Def.success(result)
    return result;
  }
}
