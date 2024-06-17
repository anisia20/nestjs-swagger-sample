"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientProviders = void 0;
const client_entity_1 = require("./entities/client.entity");
exports.clientProviders = [
    {
        provide: 'CLIENT_REPOSITORY',
        useFactory: (dataSource) => {
            return dataSource.getRepository(client_entity_1.Client);
        },
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=client.providers.js.map