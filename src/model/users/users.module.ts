import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserProducerKafkaClientService } from 'src/producer';

@Module({
  controllers: [UsersController],
  providers: [UserProducerKafkaClientService],
})
export class UsersModule {}
