
import { Client, Transport, ClientKafka } from "@nestjs/microservices";
import { Injectable } from '@nestjs/common';
import { BaseKafkaService } from './index';
import { broker, orderClientId, orderGroupId } from '../../kafka-config.json';

@Injectable()
export class OrderProducerKafkaClientService extends BaseKafkaService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: orderClientId,
        brokers: [ broker ],
      },
      consumer: {
        groupId: orderGroupId
      }
    }
  })
  client: ClientKafka;

  topics = ['createOrder', 'getOrder', 'getOrders', 'updateOrder', 'deleteOrder'];
}