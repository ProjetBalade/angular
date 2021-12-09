export interface Comment {

    id?: number;
    content: string;
    score: number;
    image : string;
    difficulty : number;
    idUser : number;
    idRide : number;

}
export declare type Comments = Comment[];
