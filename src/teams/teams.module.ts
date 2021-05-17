import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsEntity } from './teams.entity';
import { TeamsService } from './teams.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TeamsEntity])
  ],
  controllers: [TeamsController],
  providers: [TeamsService]
})

export class TeamsModule {

}