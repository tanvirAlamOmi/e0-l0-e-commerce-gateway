import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  // @Post(':name')
  // async publishName(@Param() name: string): Promise<void> {
  //   return await this.appService.publishMessage(name);
  // }
}
