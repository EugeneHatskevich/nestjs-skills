import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.models';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [SequelizeModule.forFeature([Company])],
})
export class CompanyModule {}
