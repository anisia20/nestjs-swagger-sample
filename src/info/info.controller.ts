import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateServiceInfoDto } from './dto/create-service-info.dto';
import { UpdateServiceInfoDto } from './dto/update-service-info.dto';
import {CreateAirtableInfoDto} from "./dto/create-airtable-info.dto";
import {UpdateAirtableInfoDto} from "./dto/update-airtable-info.dto";
import {ApiTags} from "@nestjs/swagger";
@ApiTags('INFO')
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post('airtable')
  createAirtableInfo(@Body() createAirtableInfoDto: CreateAirtableInfoDto) {
    return this.infoService.createAirtableInfo(createAirtableInfoDto);
  }

  @Get('airtable')
  findAirtableInfoAll() {
    return this.infoService.findAirtableInfoAll();
  }

  @Get('airtable/:id')
  findAirtableInfoOne(@Param('id') id: string) {
    return this.infoService.findAirtableInfoOne(+id);
  }

  @Patch('airtable/:id')
  updateAirtableInfo(@Param('id') id: string, @Body() updateAirtableInfoDto: UpdateAirtableInfoDto) {
    return this.infoService.updateAirtableInfo(+id, updateAirtableInfoDto);
  }

  @Delete('airtable/:id')
  removeAirtableInfo(@Param('id') id: string) {
    return this.infoService.removeAirtableInfo(+id);
  }

  @Post('service')
  createServiceInfo(@Body() createServiceInfoDto: CreateServiceInfoDto) {
    return this.infoService.createServiceInfo(createServiceInfoDto);
  }

  @Get('service')
  findServiceInfoAll() {
    return this.infoService.findServiceInfoAll();
  }

  @Get('service/:id')
  findServiceInfoOne(@Param('id') id: string) {
    return this.infoService.findServiceInfoOne(+id);
  }

  @Patch('service/:id')
  updateServiceInfo(@Param('id') id: string, @Body() updateServiceInfoDto: UpdateServiceInfoDto) {
    return this.infoService.updateServiceInfo(+id, updateServiceInfoDto);
  }

  @Delete('service/:id')
  removeServiceInfo(@Param('id') id: string) {
    return this.infoService.removeServiceInfo(+id);
  }
}
