import { DataSource } from 'typeorm';
import {User} from "./entities/user.info.entity";

export const authProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(User);
    },
    inject: ['DATA_SOURCE'],
  },
];