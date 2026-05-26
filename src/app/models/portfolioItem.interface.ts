import { Portfolio } from "./portfolio.interface";


export interface PortfolioItem {
    id: string;
    portfolioId: Portfolio["id"];
    portfolio: Portfolio;
    image_url?: string;
    description?: string;
    createdAt: string | Date;
}