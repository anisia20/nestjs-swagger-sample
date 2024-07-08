import {Inject, Injectable, Logger} from '@nestjs/common';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';
import {InfoRepository} from "../info/repository/info.repository";
import {PilotRepository} from "./repository/pilot.repository";
import {ResultResponse} from "../common/dto/result-response";
import {getDomain, getYmd} from "../utils/util";
import {Def} from "../common/config/def";
import * as Airtable from "airtable";
import {AirtableCmd} from "../common/config/airtable.cmd";

@Injectable()
export class PilotService {
  private readonly logger = new Logger(PilotService.name); // Logger 인스턴스 생성
  constructor(
      private readonly pilotRepository: PilotRepository,
      private readonly infoRepository: InfoRepository,
      private readonly airtableCmd: AirtableCmd,

  ) {}

  async createPilot(request: Request, createPilotDto: CreatePilotDto) {
    const result = new ResultResponse();
    const domain = getDomain(request);

    this.logger.log(`createPilot start!! D=${domain}, N=${createPilotDto.name}`);

    //1. 도메인 검증
    const serviceInfo = await this.infoRepository.findServiceInfoOneByDomain(domain);
    //로컬 및 stage 요청은 도메인 검증페스
    if(!serviceInfo && !domain.includes('localhost') && !domain.includes('pilot.com')){
      this.logger.warn(`createPilot not found serviceInfo!! D=${domain}, N=${createPilotDto.name}`);
      await Def.fail(result, Def.R_301);
      return result
    }
    let service_id = serviceInfo?.service_id;
    //로컬 및 stage 요청은 도메인 검증페스
    if(domain.includes('localhost') || domain.includes('pilot.com')){
      service_id = 1; //Pilot 창업센터 서비스아이디
    }

    //2. 에어테이블 정보
    const airtableInfo = await this.infoRepository.findAirtableInfoOneByServiceIdAndTableName(service_id, createPilotDto.table_name);
    const today = getYmd();
    createPilotDto.create_date = today;
    createPilotDto.update_date = today;
    createPilotDto.airtable_id = airtableInfo.airtable_id;
    createPilotDto.airtable_key = '';
    createPilotDto.delete_yn = 'N';

    //3. DB입력
    const n_res =  await this.pilotRepository.create(createPilotDto);
    if(n_res < 0){
      this.logger.warn(`createPilot create fail!! D=${domain}, N=${createPilotDto.name}`);
      await Def.fail(result, Def.R_900);
      return result
    }

    //4. 에어테이블 전송
    // const base = new Airtable({apiKey: airtableInfo.api_token}).base(airtableInfo.base_id);
    const fields = {
      NAME: createPilotDto.name,
      TEL: createPilotDto.tel,
      COMMENT: createPilotDto.comment,
    }
    // const response= await base(airtableInfo.table_name).create(fields);

    const response = await this.airtableCmd.create(airtableInfo.api_token, airtableInfo.base_id, airtableInfo.table_name, fields);
    if(!response){
      this.logger.warn(`createPilot airtable create fail!! D=${domain}, N=${createPilotDto.name}`);
      await Def.fail(result, Def.R_901);
      return result
    }

    //5. 에어테이블 키 DB갱신 해줄 것 이냐?

    await Def.success(result)
    return result;
  }

}
