import { Appointment } from "./appointment.interface";
import { Company } from "./company.interface";
import { Portfolio } from "./portfolio.interface";
import { StockItem } from "./stockItem.interface";
import { User } from "./user.interface";


export interface Artist {
    id: string;
    userId: User["id"];
    user: User;
    companyId: Company["id"];
    company: Company;
    bio?: string;
    specialties: string[];
    portfolio?: Portfolio;
    appointments: Appointment[];
    stockItems: StockItem[];
}