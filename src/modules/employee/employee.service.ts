import { Injectable } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import { EmployeeRepository } from './employee.repository';
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
