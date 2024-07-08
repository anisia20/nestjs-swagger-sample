import {Injectable, Logger} from "@nestjs/common";
import * as Airtable from "airtable";

@Injectable()
export class AirtableCmd {
    private readonly logger = new Logger(AirtableCmd.name); // Logger 인스턴스 생성
    async create(apiKey: string, base_id: string, table_name: string, fields: any) {
        const base = new Airtable({apiKey}).base(base_id);
        try{
            return await base(table_name).create(fields);
        }catch (e){
            this.logger.error(e);
            return;
        }
    }

}