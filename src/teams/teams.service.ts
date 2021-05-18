import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Teams } from './teams.models';
import { CreateTeamsDto } from './dto/create-teams.dto';
import sequelize from 'sequelize';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Teams) private teamsRepository: typeof Teams) {
  }

  async createTeam(dto: CreateTeamsDto) {
    const team = await this.teamsRepository.create(dto)
    return team
  }

  async getAllTeams() {
    const teams = await this.teamsRepository.findAll()
    return teams
  }

  async getTopTeams() {
    const topTeams = await this.teamsRepository.findAll({limit: 5, order:[["employeeCount", "DESC"]]})
    return topTeams
  }

  async removeTeam(id: number) {
    const team = await this.teamsRepository.destroy({where: {id: id}});
    return team;
  }

  async getTeamById(id: number) {
    const team = await this.teamsRepository.findByPk(id);
    return team;
  }

}
