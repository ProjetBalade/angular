import {DatePipe} from "@angular/common";

export interface Dog {
    id: number;
    nameDog: string;
    raceDog: string;
    dateOfBirth: DatePipe;
    idUser:number;
}
export declare type Dogs = Dog[];

