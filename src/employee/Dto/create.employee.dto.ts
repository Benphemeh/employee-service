import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEmployeeDto {


    @IsString()
    firstName: string;

    @IsString()
     lastName: string;

     @IsNotEmpty()
     age: number;

  constructor(partial: Partial<CreateEmployeeDto>) {
    Object.assign(this, partial);
  }
}