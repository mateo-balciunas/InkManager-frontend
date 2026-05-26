import { Appointment } from "./appointment.interface";
import { User } from "./user.interface";


export interface Client {
    id: string;
    name: string;
    lastName: string;
    userId: User["id"];
    user: User;
    phoneNumber?: string;
    medicalNotes?: string;
    appointments: Appointment[];
}