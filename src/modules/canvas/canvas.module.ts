import { Module } from '@nestjs/common';
import { CanvasGateway } from './canvas.gateway';

@Module({
  controllers: [],
  providers: [CanvasGateway],
})
export class CanvasModule {}
