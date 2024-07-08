import {Controller, Get, Post, Body, Patch, Param, Delete, Req} from '@nestjs/common';
import { PilotService } from './pilot.service';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('PILOT')
@Controller('pilot')
export class PilotController {
  constructor(private readonly franchiseService: PilotService) {}

  @Post()
  create(@Body() createFranchiseDto: CreatePilotDto, @Req() request: Request) {
    return this.franchiseService.createPilot(request, createFranchiseDto);
  }

}
