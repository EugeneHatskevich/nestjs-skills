import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.models';

@Injectable()
export class EmployeeService {

  constructor(@InjectModel(Employee) private employeeRepository: typeof Employee) {
  }

  async createTeam(dto:CreateEmployeeDto) {
    const employee = await this.employeeRepository.create(dto);
    return employee;
  }

  async getAllEmployee() {
    const employee = await this.employeeRepository.findAll();
    return employee;
  }

  async getTopByCreated() {
    const employee = await this.employeeRepository.findAll({limit: 5, order: [["createdAt", "DESC"]]});
    return employee;
  }

  async getEmployeeByName(name: string) {
    const employee = await this.employeeRepository.findAll({where: {firstName: name}});
    return employee;
  }

  async getEmployeeById(id: number) {
    const employee = await this.employeeRepository.findByPk(id);
    return employee;
  }

  async removeEmployee(id: number) {
    const employee = await this.employeeRepository.destroy({where: {id: id}});
    return employee;
  }
}