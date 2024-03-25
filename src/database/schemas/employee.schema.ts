
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    age: number;
    
}


export const EmployeeSchema = SchemaFactory.createForClass(Employee)