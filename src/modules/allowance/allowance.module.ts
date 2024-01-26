import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AllowanceController } from './controllers';
import { AllowanceEntity } from './entities';
import { AllowanceService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([AllowanceEntity])],
  providers: [AllowanceService],
  controllers: [AllowanceController],
})
export class AllowanceModule {}
