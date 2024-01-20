import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CreateEmployeeDto } from '../dtos';
import { EmployeeService } from '../services';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() employeeData: CreateEmployeeDto) {
    await this.employeeService.create(employeeData);
    return 'Employee registred successfully.';
  }

  @Get()
  @HttpCode(200)
  async readAll() {
    return await this.employeeService.readAll();
  }

  @Get(':id')
  @HttpCode(200)
  async readById(@Param('id', ParseIntPipe) id: number) {
    return await this.employeeService.readById(id);
  }
}
