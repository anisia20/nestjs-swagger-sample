/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from '../database/database.module';
import { clientProviders } from './client.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientController],
  providers: [...clientProviders,ClientService],
})
export class ClientModule {}
