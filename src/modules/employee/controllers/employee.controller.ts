import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateEmployeeDto, UpdateEmployeeDto } from '../dtos';
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
    const result = await this.employeeService.readById(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() employeeData: UpdateEmployeeDto,
  ) {
    const result = await this.employeeService.update(id, employeeData);
    if (!result) {
      throw new NotFoundException();
    }
    return 'Employee updated successfully.';
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.employeeService.delete(id);
    return 'Employee deleted successfully.';
  }
}
