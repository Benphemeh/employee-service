import { IsOptional, IsString } from "class-validator";

export class UpdateEmployeeDto{


    @IsOptional()
    @IsString()
    gender: string


    @IsOptional()
    @IsString()
    email: string


    constructor(partial: Partial<UpdateEmployeeDto>) {
        Object.assign(this, partial);
    }

    
}
