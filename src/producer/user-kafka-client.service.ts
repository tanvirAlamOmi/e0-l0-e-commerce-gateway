
import { Client, Transport, ClientKafka } from "@nestjs/microservices";
import { Injectable } from '@nestjs/common';
import { BaseKafkaService } from './index';
import { broker, userGroupId, userClientId } from '../../kafka-config.json';

@Injectable()
export class UserProducerKafkaClientService extends BaseKafkaService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: userClientId,
        brokers: [ broker ],
      },
      consumer: {
        groupId: userGroupId
      }
    }
  })
  client: ClientKafka;

  topics = ['getUsers', 'getUser', 'updateUser', 'deleteUser'];
}