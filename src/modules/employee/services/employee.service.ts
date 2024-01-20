import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { CreateEmployeeDto, UpdateEmployeeDto } from '../dtos';
import { EmployeeEntity } from '../entities';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly repository: Repository<EmployeeEntity>,
  ) {}

  async create(employeeData: CreateEmployeeDto): Promise<EmployeeEntity> {
    return await this.repository.save(employeeData);
  }

  async readAll(): Promise<EmployeeEntity[]> {
    return await this.repository.find();
  }

  async readById(employeeId: number): Promise<EmployeeEntity> {
    return await this.repository.findOne({
      where: {
        id: employeeId,
      },
    });
  }

  async update(
    id: number,
    employeeData: UpdateEmployeeDto,
  ): Promise<false | UpdateResult> {
    const result = await this.repository.update(id, employeeData);
    console.log('Service result', result);
    return result;
  }
}
