import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrderProducerKafkaClientService } from 'src/producer';

@Module({
  controllers: [OrdersController],
  providers: [OrderProducerKafkaClientService],
  imports: [OrdersModule],
})
export class OrdersModule {}
