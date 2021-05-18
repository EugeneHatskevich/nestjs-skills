import { IsInt, Min } from 'class-validator';

export class CreateEmployeeDto{
  @Min(1)
  readonly firstname: string

  readonly lastname: string

  @IsInt()
  readonly teamId: number

  @IsInt()
  readonly companyId: number

  readonly position: string

}