import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './teams/teams.module';
import { Connection } from 'typeorm';
import { TeamsEntity } from './teams/teams.entity';
import { EmployeeEntity } from './employee/employee.entity';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'ec2-34-202-54-225.compute-1.amazonaws.com',
      username: 'kjkxucfpswylti',
      password: 'ba116a7c6650225860d88c1f957f6342cb39b88f32623b3ddbc6897ee2cc9132',
      port: 5432,
      database: 'dcim5c2c7uppsr',
      entities: [TeamsEntity, EmployeeEntity],
      synchronize: true,
      ssl: {rejectUnauthorized: false}
    }),
    TeamsModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}
