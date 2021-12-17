export interface Message {
    id: number;
    idRecipient : number;
    idSender : number;
    content : string;
    object : string;
}

export declare type Messages = Message[];
