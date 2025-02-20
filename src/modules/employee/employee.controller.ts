import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schemas/employee.schema';
import { UpdateEmployeeDto } from './Dto/update.employee.dto';

@Controller('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get(':employeeId')
  async getEmployee(
    @Param('employeeId') employeeId: string,
  ): Promise<Employee> {
    return this.employeeService.getEmployeeById(employeeId);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.employeeService.getEmployees();
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    await this.employeeService.updateEmployee(id, updateEmployeeDto);
  }
}
