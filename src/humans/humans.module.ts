import { Module } from '@nestjs/common';
import { HumansController } from './humans.controller';
import { HumansService } from './humans.service';

@Module({
  controllers: [HumansController],
  providers: [HumansService],
})
export class HumansModule {}
