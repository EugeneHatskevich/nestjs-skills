import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  @Get()
  getAll(): string {
    return 'GetAllEmployees';
  }
  @Get('/sortAdd')
  getSortAdd(): string {
    return 'GetSortAdd';
  }
  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): string {
    return 'Create employee';
  }
  @Delete(':id')
  deleteEmployee(@Param('id') id: string): string {
    return 'delete';
  }
  @Get(':id')
  getInfoAboutEmployee(@Param('id') id: string): string {
    return 'Get one employee';
  }
  @Get('/filter/:name')
  getFilterByName(@Param('name') name: string): string {
    return 'Filter by' + name;
  }
}
