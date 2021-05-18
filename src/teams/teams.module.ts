import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teams } from './teams.models';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [SequelizeModule.forFeature([Teams])]
})
export class TeamsModule {}
