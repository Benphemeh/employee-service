import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';

@Injectable()
export class CreateConsumer implements OnModuleInit {
  constructor(private readonly Consumer: ConsumerService) {}
  onModuleInit() {
    this.Consumer.consume(
      'create-client',
      { topics: ['create-employee'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'create-consumer',
            message: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
