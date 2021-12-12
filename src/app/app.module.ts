import { Module } from '@nestjs/common';
import { CanvasGateway } from '@/features/canvas';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CanvasGateway],
})
export class AppModule {}
