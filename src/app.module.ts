import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), EmployeeModule],
})
export class AppModule {}
