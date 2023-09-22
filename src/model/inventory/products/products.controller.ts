import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ProductProducerKafkaClientService } from 'src/producer';

@Controller('products')
export class ProductsController {
    
  constructor(
    private readonly productClientService: ProductProducerKafkaClientService
  ) {}

  
  @Get()
  getProducts() {
    return this.productClientService.send('getProducts', '');
  }

  @Post('create')
  createProduct(@Payload() payload) {
    return this.productClientService.send('createProduct', payload);
  }  

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productClientService.send('getProduct', id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Payload() payload) {
    return this.productClientService.send('updateProduct', {
      id: id,
      data: payload
    });
  }

  
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productClientService.send('deleteProduct', id);
  }
}
