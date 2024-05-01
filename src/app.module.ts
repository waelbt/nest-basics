import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HumansModule } from './humans/humans.module';

@Module({
  imports: [HumansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
