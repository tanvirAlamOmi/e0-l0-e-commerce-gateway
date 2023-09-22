import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { log } from 'console';
import { UserProducerKafkaClientService } from 'src/producer';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userClientService: UserProducerKafkaClientService
  ) {}

  @Get()
  getUsers() {
    return this.userClientService.send('getUsers', 'Hello Kafka');
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    console.log('producer id', id);
    return this.userClientService.send('getUser', id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Payload() payload) {
    return this.userClientService.send('updateUser', {
      id: id,
      data: payload
    });
  }

  
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userClientService.send('deleteUser', id);
  }
}
