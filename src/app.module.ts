import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamsModule } from './teams/teams.module';
import { EmployeeModule } from './employee/employee.module';
import { Teams } from './teams/teams.models';
import { Employee } from './employee/employee.models';
import { Company } from './company/company.models';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'to3NgKhnQ4rmQga7oBbf',
      port: 5432,
      database: 'postgres',
      models: [Teams, Employee, Company],
      autoLoadModels: true,
    }),
    TeamsModule,
    EmployeeModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
