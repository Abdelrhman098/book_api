import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter({logger: true})
  const app = await NestFactory.create(AppModule, fastifyAdapter);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
