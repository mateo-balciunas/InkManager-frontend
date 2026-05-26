import { Artist } from "./artist.interface";
import { StockItem } from "./stockItem.interface";


export interface Portfolio {
    id: string;
    artistId: Artist["id"];
    artist: Artist;
    item: StockItem[]; 
}