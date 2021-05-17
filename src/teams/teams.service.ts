import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamsEntity } from './teams.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamsEntity)
    private teamsRepository: Repository<TeamsEntity>,
  ) {}

  getAll(): Promise<TeamsEntity[]> {
    return this.teamsRepository.find();
  }

  getTopTeams(): Promise<TeamsEntity[]> {
    return this.teamsRepository.find({order: {employeeCount:'ASC'}});
  }

  findOne(id: string): Promise<TeamsEntity> {
    return this.teamsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.teamsRepository.delete(id);
  }
}