import { DataSource } from 'typeorm';
import {Pilot} from "./entities/pilot.entity";

export const pilotProviders = [
  {
    provide: 'PILOT_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(Pilot);
    },
    inject: ['DATA_SOURCE'],
  },
];