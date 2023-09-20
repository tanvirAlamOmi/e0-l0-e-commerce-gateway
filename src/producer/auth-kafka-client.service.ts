
import { Client, Transport, ClientKafka } from "@nestjs/microservices";
import { Injectable } from '@nestjs/common';
import { BaseKafkaService } from './index';
import { broker, authClientId, authGroupId } from '../../kafka-config.json';

@Injectable()
export class AuthProducerKafkaClientService extends BaseKafkaService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: authClientId,
        brokers: [ broker ],
      },
      consumer: {
        groupId: authGroupId
      }
    }
  })
  client: ClientKafka;

  topics = ['login', 'signup', 'logout', 'refresh', 'requestPasswordReset', 'resetPassword'];
}