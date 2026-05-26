import { Artist } from "./artist.interface";
import { Client } from "./client.interface";
import { Company } from "./company.interface";


export interface Appointment {
    id: string;
    scheduleAt: string | Date;
    duration: number;
    status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
    price?: number;
    artistId: Artist["id"];
    artist: Artist;
    clientId: Client["id"];
    client: Client;
    companyId: Company["id"];
    company: Company;
}