"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    create(creatClienteDto) {
        return this.clientRepository.save(creatClienteDto);
    }
    findAll() {
        return this.clientRepository.find();
    }
    findOne(id) {
        return this.clientRepository.findOne({ where: { id } });
    }
    update(id, updateClientDto) {
        return this.clientRepository.update(id, updateClientDto);
    }
    remove(id) {
        return this.clientRepository.delete(id);
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CLIENT_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map