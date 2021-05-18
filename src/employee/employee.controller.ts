import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {

  constructor(private employeeService: EmployeeService) {
  }

  @Post()
  create(@Body() employeeDto: CreateEmployeeDto){
    return this.employeeService.createTeam(employeeDto)
  }

  @Get()
  getAllEmployee(){
    return this.employeeService.getAllEmployee()
  }

  @Get('top')
  getTopByCreated(){
    return this.employeeService.getTopByCreated()
  }

  @Get('filter')
  getEmployeeByName(@Query() query){
    return this.employeeService.getEmployeeByName(query.name)
  }

  @Delete(':id')
  removeEmployee(@Param('id') id: number){
    return this.employeeService.removeEmployee(id)
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: number){
    return this.employeeService.getEmployeeById(id)
  }
}
