import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthProducerKafkaClientService } from 'src/producer';

@Module({
  controllers: [AuthController],
  providers: [AuthProducerKafkaClientService],
})
export class AuthModule {}
