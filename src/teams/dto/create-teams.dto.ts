import { IsInt, Min } from 'class-validator';

export class CreateTeamsDto {

  @Min(1)
  readonly name: string

  @IsInt()
  readonly employeeCount: number

  @Min(10)
  readonly description: string

  @IsInt()
  readonly companyId: number
}