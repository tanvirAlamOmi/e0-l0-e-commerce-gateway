import { Controller, Get, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { AuthProducerKafkaClientService } from 'src/producer';

@Controller('auth')
export class AuthController {
  constructor( private readonly kafkaClientService: AuthProducerKafkaClientService ) {}

  @Post('login')
  login(@Payload() payload) {
    return this.kafkaClientService.send('login', payload);
  }

  @Post('signup')
  signup(@Payload() payload) {
    return this.kafkaClientService.send('signup', payload);
  }  

  @Post('logout')
  async logout(@Payload() payload) {
      return this.kafkaClientService.send('logout', payload);
  }

  @Post('refresh')
  async refreshTokens(@Payload() payload) {
      return this.kafkaClientService.send('refresh', payload);
  }

  @Post('request-password-reset')
  async requestPasswordReset(@Payload() payload) {
      return this.kafkaClientService.send('requestPasswordReset', payload);
  }

  @Post('reset-password')
  async resetPassword(@Payload() payload) {
      return this.kafkaClientService.send('resetPassword', payload);
  }

  @Get()
  async test() {
      return "sejuti";
  }
}
