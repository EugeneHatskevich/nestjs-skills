import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Employee } from '../employee/employee.models';
import { Company } from '../company/company.models';

interface TeamsCreationsAttrs {
  name: string
  employeeCount: number
  description: string
  companyId: number
}

@Table({ tableName: 'teams' })
export class Teams extends Model<Teams, TeamsCreationsAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeCount: number;

  @HasMany(() => Employee)
  employee: Employee[];

  @ForeignKey(() => Company)
  @Column({type: DataType.INTEGER})
  companyId: number

  @BelongsTo(() => Company)
  company: Company
}