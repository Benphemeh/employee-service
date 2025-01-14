import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async findOne(
    employeeFilterQuerry: FilterQuery<Employee>,
  ): Promise<Employee> {
    return this.employeeModel.findOne(employeeFilterQuerry);
  }

  async find(employeeFilterQuerry: FilterQuery<Employee>): Promise<Employee[]> {
    return this.employeeModel.find(employeeFilterQuerry);
  }

  async create(employee: Employee): Promise<Employee> {
    const newEmployee = new this.employeeModel(employee);
    return newEmployee.save();
  }

  async findOneAndUpdate(
    employeeFilterQuerry: FilterQuery<Employee>,
    employee: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeeModel.findOneAndUpdate(employeeFilterQuerry, employee);
  }
}
