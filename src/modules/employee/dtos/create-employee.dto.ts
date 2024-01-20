import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Document ID is required' })
  documentId: string;

  @IsNotEmpty({ message: 'First name is required' })
  firstname: string;

  @IsNotEmpty({ message: 'Last name is required' })
  lastname: string;

  @IsNotEmpty({ message: 'Birth date is required' })
  @IsDateString({}, { message: 'Birth date must be a date format' })
  birthdate: Date;

  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @IsNotEmpty({ message: 'Departament is required' })
  departament: string;

  @IsNotEmpty({ message: 'Role is required' })
  role: string;

  @IsNotEmpty({ message: 'Salary is required' })
  @IsNumber({}, { message: 'Must be a number format' })
  salary: number;

  @IsNotEmpty({ message: 'Entry date is required' })
  @IsDateString({}, { message: 'Entry date must be a date format' })
  entryDate: Date;
}
