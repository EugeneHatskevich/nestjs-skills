import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateTeamsDto } from './dto/create-teams.dto';
import { AddEmployeeForTeamsDto } from './dto/add-employee-for-teams.dto';
import { DeleteEmployeeForTeamsDto } from './dto/delete-employee-for-teams.dto';

@Controller('teams')
export class TeamsController {
  @Get()
  getAll(): string {
    return 'GetAllTeams';
  }
  @Get('/sortTop')
  getTopTeams(): string {
    return 'GetTopTeams';
  }
  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createTeams(@Body() createTeamsDto: CreateTeamsDto): string {
    return 'Create teams';
  }
  @Delete(':id')
  deleteTeams(@Param('id') id: string): string {
    return 'delete';
  }
  @Get(':id')
  getInfoAboutTeam(@Param('id') id: string): string {
    return 'Get one team';
  }
  @Post('/addEmployeeForTeams')
  @HttpCode(HttpStatus.CREATED)
  addEmployeeForTeams(@Body() addEmployeeForTeamsDto: AddEmployeeForTeamsDto): string {
    return 'Add employee for teams';
  }
  @Delete(':id/deleteEmployeeForTeams')
  deleteEmployeeForTeams(@Body() deleteEmployeeForTeamsDto: DeleteEmployeeForTeamsDto, @Param('id') id: string): string {
    return 'Delete employee for teams';
  }
}
