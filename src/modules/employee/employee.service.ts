import { Injectable } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import { EmployeeRepository } from './employee.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateEmployeeDto } from './Dto/update.employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async getEmployeeById(employeeId: string): Promise<Employee> {
    return this.employeeRepository.findOne({ employeeId });
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeeRepository.find({});
  }

  // async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
  //     const createdEmployee = new this.employeeRepository(CreateEmployeeDto);
  //     return createdEmployee.save();
  // }

  async createEmployee(employee: Employee): Promise<Employee> {
    return this.employeeRepository.create(employee);
  }

  async updateEmployee(
    employeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeRepository.findOneAndUpdate(
      { employeeId },
      updateEmployeeDto,
    );
  }
}
