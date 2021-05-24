import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Teams } from './teams.models';
import { CreateTeamsDto } from './dto/create-teams.dto';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Teams) private teamsRepository: typeof Teams) {}

  async createTeam(dto: CreateTeamsDto) {
    return await this.teamsRepository.create(dto);
  }

  async getAllTeams() {
    return await this.teamsRepository.findAll();
  }

  async getTopTeams() {
    return await this.teamsRepository.findAll({
      limit: 5,
      order: [['employeeCount', 'DESC']],
    });
  }

  async removeTeam(id: number) {
    return await this.teamsRepository.destroy({ where: { id: id } });
  }

  async getTeamById(id: number) {
    return await this.teamsRepository.findByPk(id);
  }
}
