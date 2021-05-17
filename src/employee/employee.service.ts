import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { TeamsEntity } from '../teams/teams.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
  ) {}

  findAll(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<EmployeeEntity> {
    return this.employeeRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }

  filterByName(name: string): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find({where:{firstName:name}});
  }

  getTopCreated(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find({order: {createdAt:'ASC'}});
  }
}