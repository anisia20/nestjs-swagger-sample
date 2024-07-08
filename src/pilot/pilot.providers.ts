import { DataSource } from 'typeorm';
import {Franchise} from "./entities/franchise.entity";

export const pilotProviders = [
  {
    provide: 'FRANCHISE_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(Franchise);
    },
    inject: ['DATA_SOURCE'],
  },
];