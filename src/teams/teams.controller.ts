import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamsDto } from './dto/create-teams.dto';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post()
  create(@Body() teamDto: CreateTeamsDto) {
    return this.teamsService.createTeam(teamDto);
  }

  @Get()
  getAllTeams() {
    return this.teamsService.getAllTeams();
  }

  @Get('/top')
  getTopTeams() {
    return this.teamsService.getTopTeams();
  }

  @Delete(':id')
  removeTeam(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.removeTeam(id);
  }

  @Get(':id')
  getTeamById(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.getTeamById(id);
  }
}
