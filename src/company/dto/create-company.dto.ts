import { IsInt, Min } from 'class-validator';

export class CreateCompanyDto {
  @Min(1)
  readonly name: string

  @IsInt()
  readonly teamsCount: number

}