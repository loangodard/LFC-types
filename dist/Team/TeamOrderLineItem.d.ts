import { Design } from "../Template/Design";
import { TeamOrder } from "./TeamOrder";
export interface TeamOrderLineItem {
    id?: number;
    teamOrder: TeamOrder;
    design: Design;
    size: string;
    quantity: number;
    createdAt: Date;
    printed: boolean;
    socksType: string;
}
