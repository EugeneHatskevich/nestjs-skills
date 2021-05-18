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
      host: 'ec2-34-202-54-225.compute-1.amazonaws.com',
      username: 'kjkxucfpswylti',
      password: 'ba116a7c6650225860d88c1f957f6342cb39b88f32623b3ddbc6897ee2cc9132',
      port: 5432,
      database: 'dcim5c2c7uppsr',
      models: [Teams, Employee, Company],
      autoLoadModels: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    TeamsModule,
    EmployeeModule,
    CompanyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

