import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AddEmployeeForTeamsDto } from './dto/add-employee-for-teams.dto';
import { DeleteEmployeeForTeamsDto } from './dto/delete-employee-for-teams.dto';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
import { TeamsService } from './teams.service';


@Controller('teams')
export class TeamsController {

  constructor(private readonly teamsService: TeamsService) {
  }


  @Get()
  getAll() {
    return this.teamsService.getAll();
  }
  @Get('/sortTop')
  getTopTeams() {
    return this.teamsService.getTopTeams();
  }
  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createTeams(@Body() createEmployeeDto: CreateEmployeeDto): string {
    return 'Create employee';
  }
  @Delete(':id')
  deleteTeams(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
  @Get(':id')
  getInfoAboutTeam(@Param('id') id: string) {
    return this.teamsService.findOne(id);
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
