import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeService: EmployeeService) {
  }

  @Get()
  getAll() {
    return this.employeeService.findAll();
  }
  @Get('/sortAdd')
  getTopCreated() {
    return this.employeeService.getTopCreated();
  }
  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): string {
    return 'Create employee';
  }
  @Delete(':id')
  deleteEmployee(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
  @Get(':id')
  getInfoAboutEmployee(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }
  @Get('/filter/:name')
  getFilterByName(@Param('name') name: string) {
    return this.employeeService.filterByName(name);
  }
}
