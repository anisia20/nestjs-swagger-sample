import { DataSource } from 'typeorm';
import {AirtableInfo} from "./entities/airtable.info.entity";
import {ServiceInfo} from "./entities/service.info.entity";

export const infoProviders = [
  {
    provide: 'AIRTABLE_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(AirtableInfo);
    },
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'SERVICE_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(ServiceInfo);
    },
    inject: ['DATA_SOURCE'],
  },
];