import { Artist } from "./artist.interface";
import { Company } from "./company.interface";


export interface StockItem {
    id: string;
    name: string;
    description?: string;
    brand: string;
    price?: number;
    quantity: number;
    artistId: Artist["id"];
    artist: Artist;
    companyId: Company["id"];
    company: Company;
}