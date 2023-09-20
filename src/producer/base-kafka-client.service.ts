import { ClientKafka } from "@nestjs/microservices";
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export abstract class BaseKafkaService implements OnModuleInit {
  abstract client: ClientKafka;
  abstract topics: string[];

  async onModuleInit() {
    this.topics.forEach(topic => this.client.subscribeToResponseOf(topic));
    await this.client.connect();
  }

  send(topic: string, message: any) {
    if (this.topics.includes(topic)) {
      console.log(message);
      
      return this.client.send(topic, message);
    }
    throw new Error('Invalid topic.');
  }
}
