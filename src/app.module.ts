import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import {ConfigModule} from "@nestjs/config";
import { getConfig } from './utils';
import {DatabaseModule} from "./database/database.module";

@Module({
  imports: [
    ClientModule,
    DatabaseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: [getConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
