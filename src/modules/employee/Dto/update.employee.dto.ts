import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  constructor(partial: Partial<UpdateEmployeeDto>) {
    Object.assign(this, partial);
  }
}
