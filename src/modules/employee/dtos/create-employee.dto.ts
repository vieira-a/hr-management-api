import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Document ID is required' })
  documentId: string;

  @IsNotEmpty({ message: 'Full name is required' })
  fullName: string;

  @IsNotEmpty({ message: 'Birth date is required' })
  @IsDateString({}, { message: 'Birth date must be a date format' })
  birthDate: Date;

  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @IsOptional()
  @IsEmail({}, { message: 'Must be a valid e-mail address' })
  email: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  phoneNumber: string;

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
