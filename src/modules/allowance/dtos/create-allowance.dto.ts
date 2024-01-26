import { IsNotEmpty } from 'class-validator';

export class CreateAllowanceDto {
  @IsNotEmpty({ message: 'Allowance type is required' })
  type: string;

  @IsNotEmpty({ message: 'Allowance description is required' })
  description: string;

  @IsNotEmpty({ message: 'Allowance tax should not be empty' })
  hasFgts: boolean;

  @IsNotEmpty({ message: 'Allowance tax should not be empty' })
  hasInss: boolean;

  @IsNotEmpty({ message: 'Allowance tax should not be empty' })
  hasIr: boolean;

  @IsNotEmpty({ message: 'Allowance tax should not be empty' })
  hasHazard: boolean;

  @IsNotEmpty({ message: 'Allowance tax should not be empty' })
  hasUnsanitary: boolean;
}
