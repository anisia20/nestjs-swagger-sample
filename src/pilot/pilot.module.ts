/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import {PilotService} from './pilot.service';
import {PilotController} from './pilot.controller';
import {DatabaseModule} from '../database/database.module';
import {pilotProviders} from './pilot.providers';
import {PilotRepository} from "./repository/pilot.repository";
import {InfoRepository} from "../info/repository/info.repository";
import {infoProviders} from "../info/info.providers";
import {AirtableCmd} from "../common/config/airtable.cmd";

@Module({
    imports: [DatabaseModule],
    controllers: [PilotController],
    providers: [
        ...pilotProviders,
        ...infoProviders,
        PilotService,
        PilotRepository,
        InfoRepository,
        AirtableCmd
    ],
})
export class PilotModule {
}
