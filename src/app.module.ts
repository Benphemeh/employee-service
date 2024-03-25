import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { EmployeeModule } from './employee/employee.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ MongooseModule.forRoot(process.env.URI), KafkaModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
