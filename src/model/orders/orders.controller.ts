import { Controller, Get, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { OrderProducerKafkaClientService } from 'src/producer';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly orderClientService: OrderProducerKafkaClientService
      ) {}
    
      
      @Get()
      getOrders() {
        return this.orderClientService.send('getOrders', '');
      }
    
      @Post('create')
      createOrder(@Payload() payload) {
        return this.orderClientService.send('createOrder', payload);
      }  
}
