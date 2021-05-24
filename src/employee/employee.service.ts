import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.models';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee) private employeeRepository: typeof Employee,
  ) {}

  async createTeam(dto: CreateEmployeeDto) {
    return await this.employeeRepository.create(dto);
  }

  async getAllEmployee() {
    return await this.employeeRepository.findAll();
  }

  async getTopByCreated() {
    return await this.employeeRepository.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
    });
  }

  async getEmployeeByName(name: string) {
    return await this.employeeRepository.findAll({
      where: { firstName: name },
    });
  }

  async getEmployeeById(id: number) {
    return await this.employeeRepository.findByPk(id);
  }

  async removeEmployee(id: number) {
    return await this.employeeRepository.destroy({
      where: { id: id },
    });
  }
}
