import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

let dataSourceInstance: DataSource;

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      if (dataSourceInstance && dataSourceInstance.isInitialized) {
        return dataSourceInstance;
      }

      dataSourceInstance = new DataSource({
        type: 'mysql',
        host: configService.get<string>('datasource.host'),
        port: parseInt(configService.get<string>('datasource.port'), 10),
        username: configService.get<string>('datasource.username'),
        password: configService.get<string>('datasource.password'),
        database: configService.get<string>('datasource.database'),
        entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('datasource.isdev'), // 개발 환경에서만 true로 설정
        logging: configService.get<boolean>('datasource.logging'),
        timezone: '+09:00',
        cache: {
          duration: 60000,
        },
        extra: {
          connectionLimit: configService.get<number>('datasource.maxconn'),
        },
      });

      await dataSourceInstance.initialize();
      return dataSourceInstance;
    },
  },
];