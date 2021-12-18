import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageModule } from '@/modules/image';
import { CanvasModule } from '@/modules/canvas';

@Module({
  imports: [ImageModule, CanvasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
