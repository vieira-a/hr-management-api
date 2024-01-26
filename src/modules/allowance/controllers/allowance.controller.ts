import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CreateAllowanceDto } from '../dtos';
import { AllowanceService } from '../services';

@Controller('allowance')
export class AllowanceController {
  constructor(private readonly allowanceService: AllowanceService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() allowanceData: CreateAllowanceDto) {
    await this.allowanceService.create(allowanceData);
    return 'Allowance registred successfully.';
  }
}
