import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductProducerKafkaClientService } from 'src/producer';

@Module({
  controllers: [ProductsController],
  providers: [ProductProducerKafkaClientService],
  imports: [ProductsModule],
})
export class ProductsModule {}
