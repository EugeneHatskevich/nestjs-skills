import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateTeamsDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsInt()
  readonly employeeCount: number;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
}
