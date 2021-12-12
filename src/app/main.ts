import { NestFactory } from '@nestjs/core';
import { CORS_CLIENT_URL, PORT } from '@/shared/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: CORS_CLIENT_URL,
  });
  await app.listen(PORT);
}

bootstrap();
