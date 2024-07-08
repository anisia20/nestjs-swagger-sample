import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import {ConfigModule} from "@nestjs/config";
import { getConfig } from './utils';
import {DatabaseModule} from "./database/database.module";
import {PilotModule} from "./pilot/pilot.module";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
    AuthModule,
    InfoModule,
    PilotModule,
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
