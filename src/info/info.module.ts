/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import {InfoService} from './info.service';
import {InfoController} from './info.controller';
import {DatabaseModule} from '../database/database.module';
import {infoProviders} from './info.providers';
import {InfoRepository} from "./repository/info.repository";

@Module({
    imports: [DatabaseModule],
    controllers: [InfoController],
    providers: [
        ...infoProviders,
        InfoService,
        InfoRepository
    ]
})
export class InfoModule {
}
