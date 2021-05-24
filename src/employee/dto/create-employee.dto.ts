import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;
  @IsString()
  readonly lastname: string;
  @IsNotEmpty()
  @IsInt()
  readonly teamId: number;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
  @IsNotEmpty()
  @IsString()
  readonly position: string;
}
