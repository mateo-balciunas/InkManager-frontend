import { Artist } from "./artist.interface";
import { Client } from "./client.interface";


export interface User {
    id: string;
    email: string;
    role: 'ADMIN' | 'ARTIST' | 'CLIENT';
    createdAt: string | Date;
    updatedAt: string | Date;

    //Relations
    artistProfile?: Artist;
    clientProfile?: Client;
}