import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAllowanceDto } from '../dtos';
import { AllowanceEntity } from '../entities';

@Injectable()
export class AllowanceService {
  constructor(
    @InjectRepository(AllowanceEntity)
    private readonly repository: Repository<AllowanceEntity>,
  ) {}

  async create(allowanceData: CreateAllowanceDto): Promise<AllowanceEntity> {
    return await this.repository.save(allowanceData);
  }

  async readAll(): Promise<AllowanceEntity[]> {
    return await this.repository.find();
  }
}
