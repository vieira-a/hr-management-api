import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEmployeeDto } from '../dtos';
import { EmployeeEntity } from '../entities';

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
}
