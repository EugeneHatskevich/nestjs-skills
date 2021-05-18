import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Teams } from '../teams/teams.models';

interface CompanyCreationsAttrs {
  name: string

}

@Table({ tableName: 'company' })
export class Company extends Model<Company, CompanyCreationsAttrs> {
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @HasMany(() => Teams)
  teams: Teams[];
}