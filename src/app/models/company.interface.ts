import { Appointment } from "./appointment.interface";
import { Artist } from "./artist.interface";
import { StockItem } from "./stockItem.interface";


export interface Company {
    id: string;
    name: string;
    address?: string;
    contact_info?: string;
    artists: Artist[];
    appointments: Appointment[];
    stockItmes: StockItem[];
}