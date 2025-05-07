import { Design } from "../Template/Design";
import { Tournament } from "./Tournament";
export interface TournamentOrder {
    id?: number;
    tournament: Tournament;
    design: Design;
    size: string;
    quantity: number;
    createdAt: Date;
    printed: boolean;
}
