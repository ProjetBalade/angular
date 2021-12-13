export interface Ride {
    id: number;
    nameRide: string;
    place:string;
    description:string;
    website: string;
    difficulty:number;
    schedule:string;
    photo:string;
    score:number;
    idUser: number;
}

export declare type Rides= Ride[];

