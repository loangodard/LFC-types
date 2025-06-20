import { Template } from "../Template/Template";
import { TeamOrderLineItem } from "./TeamOrderLineItem";

export interface TeamOrder {
    id?: string;
    name: string;
    createdAt?: Date;
    productionDeadLine?: Date;
    availableTemplates: Template[];
    status: "OPEN" | "TO_PRODUCE" | "PRODUCED" | "SHIPPED" | "BILLED";
    lineItems: TeamOrderLineItem[];
    pipeDriveDealId?: string;
};