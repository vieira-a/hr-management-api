import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

import { AllowanceModule } from './modules/allowance/allowance.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AllowanceModule,
    EmployeeModule,
  ],
  providers: [Logger],
})
export class AppModule {}
