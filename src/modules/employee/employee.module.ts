import { Module } from '@nestjs/common';
import { EmployeeService } from './services';
import { EmployeeController } from './controllers';

@Module({
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
