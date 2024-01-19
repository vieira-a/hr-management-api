import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CreateEmployeeDto } from '../dtos';
import { EmployeeService } from '../services';

@Controller('employee/register')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() employeeData: CreateEmployeeDto) {
    await this.employeeService.create(employeeData);
    return 'Employee registred successfully.';
  }
}
