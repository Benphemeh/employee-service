import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CreateConsumer } from './create.consumer';
import { UpdateConsumer } from './update.consumer';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './employee.repository';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}]), KafkaModule],
  providers: [EmployeeService,EmployeeRepository, CreateConsumer, UpdateConsumer],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
