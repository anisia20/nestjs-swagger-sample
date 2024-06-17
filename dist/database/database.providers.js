"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
let dataSourceInstance;
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            if (dataSourceInstance && dataSourceInstance.isInitialized) {
                return dataSourceInstance;
            }
            dataSourceInstance = new typeorm_1.DataSource({
                type: 'mysql',
                host: configService.get('datasource.host'),
                port: parseInt(configService.get('datasource.port'), 10),
                username: configService.get('datasource.username'),
                password: configService.get('datasource.password'),
                database: configService.get('datasource.database'),
                entities: [__dirname + '/../client/entities/*.entity{.ts,.js}'],
                logging: configService.get('datasource.logging'),
                timezone: '+09:00',
                cache: {
                    duration: 60000,
                },
                extra: {
                    connectionLimit: 32,
                },
            });
            await dataSourceInstance.initialize();
            return dataSourceInstance;
        },
    },
];
//# sourceMappingURL=database.providers.js.map