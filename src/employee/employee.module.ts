import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee.models';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [SequelizeModule.forFeature([Employee])],
})
export class EmployeeModule {}
