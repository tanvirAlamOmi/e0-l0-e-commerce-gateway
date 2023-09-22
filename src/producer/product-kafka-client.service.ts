
import { Client, Transport, ClientKafka } from "@nestjs/microservices";
import { Injectable } from '@nestjs/common';
import { BaseKafkaService } from './index';
import { broker, productClientId, productGroupId } from '../../kafka-config.json';

@Injectable()
export class ProductProducerKafkaClientService extends BaseKafkaService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: productClientId,
        brokers: [ broker ],
      },
      consumer: {
        groupId: productGroupId
      }
    }
  })
  client: ClientKafka;

  topics = ['createProduct', 'getProduct', 'getProducts', 'updateProduct', 'deleteProduct'];
}