import { IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  firstname: string;

  @IsOptional()
  lastname: string;

  @IsOptional()
  @IsDateString({}, { message: 'Birth date must be a date format' })
  birthdate: Date;

  @IsOptional()
  address: string;

  @IsOptional()
  departament: string;

  @IsOptional()
  role: string;

  @IsOptional()
  @IsNumber({}, { message: 'Must be a number format' })
  salary: number;

  @IsOptional()
  @IsDateString({}, { message: 'Entry date must be a date format' })
  entryDate: Date;
}
