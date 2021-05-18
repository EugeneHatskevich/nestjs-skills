import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Teams } from '../teams/teams.models';
import { Company } from '../company/company.models';

interface EmployeeCreationsAttrs {
  firstname: string
  lastname: string
  teamId: number
  position: string
}

@Table({ tableName: 'employee' })
export class Employee extends Model<Employee, EmployeeCreationsAttrs> {
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  firstName: string;

  @Column({type: DataType.STRING})
  lastName: string;

  @Column({type: DataType.STRING, allowNull: false})
  position: string;

  @ForeignKey(() => Teams)
  @Column({type: DataType.INTEGER})
  teamId: number

  @BelongsTo(() => Teams)
  team: Teams

  @ForeignKey(() => Company)
  @Column({type: DataType.INTEGER})
  companyId: number

  @BelongsTo(() => Company)
  company: Company
}