import { consumers } from 'stream';
import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopic, Kafka } from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
    async onApplicationShutdown() {
        for(const consumer of this.consumers){
            await  consumer.disconnect();
          }  
    }
    private readonly kafka = new Kafka({
        clientId: 'consumer',
        brokers: ['localhost:9092'],
    });

    private readonly consumers:Consumer[] = [];

    async consume(
         groupId:string,
         topic:ConsumerSubscribeTopic,
         config:ConsumerRunConfig,
         ){
            const consumer: Consumer = this.kafka.consumer({ groupId: groupId});
            await consumer.connect().catch((e) => console.error(e));
            await consumer.subscribe(topic);
            await consumer.run(config);
            this.consumers.push(consumer);
         }

}
