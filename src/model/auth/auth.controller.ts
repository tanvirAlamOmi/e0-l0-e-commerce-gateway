import { Controller, Get, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { AuthProducerKafkaClientService } from 'src/producer';

@Controller('auth')
export class AuthController {
  constructor( private readonly authClientService: AuthProducerKafkaClientService ) {}

  @Post('login')
  login(@Payload() payload) {
    return this.authClientService.send('login', payload);
  }

  @Post('signup')
  signup(@Payload() payload) {
    return this.authClientService.send('signup', payload);
  }  

  @Post('logout')
  async logout(@Payload() payload) {
      return this.authClientService.send('logout', payload);
  }

  @Post('refresh')
  async refreshTokens(@Payload() payload) {
      return this.authClientService.send('refresh', payload);
  }

  @Post('request-password-reset')
  async requestPasswordReset(@Payload() payload) {
      return this.authClientService.send('requestPasswordReset', payload);
  }

  @Post('reset-password')
  async resetPassword(@Payload() payload) {
      return this.authClientService.send('resetPassword', payload);
  }

  @Get()
  async test() {
      return "sejuti";
  }
}
