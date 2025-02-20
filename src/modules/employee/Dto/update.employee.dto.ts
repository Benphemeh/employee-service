import { IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  lastName: string;

  constructor(partial: Partial<UpdateEmployeeDto>) {
    Object.assign(this, partial);
  }
}
