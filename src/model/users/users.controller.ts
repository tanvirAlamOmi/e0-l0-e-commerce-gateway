import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { log } from 'console';
import { UserProducerKafkaClientService } from 'src/producer';

@Controller('users')
export class UsersController {
  constructor(
    private readonly kafkaClientService: UserProducerKafkaClientService
  ) {}

  @Get()
  findAllUsers() {
    return this.kafkaClientService.send('findAllUsers', 'Hello Kafka');
  }

  @Get(':id')
  findSingleUser(@Param('id') id: string) {
    console.log('producer id', id);
    return this.kafkaClientService.send('findSingleUser', id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Payload() payload) {
    return this.kafkaClientService.send('updateUser', {
      id: id,
      data: payload
    });
  }

  
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.kafkaClientService.send('deleteUser', id);
  }
}
