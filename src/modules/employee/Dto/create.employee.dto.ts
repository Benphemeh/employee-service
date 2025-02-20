import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  constructor(partial: Partial<CreateEmployeeDto>) {
    Object.assign(this, partial);
  }
}
