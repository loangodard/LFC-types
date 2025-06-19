import { Template } from "../Template/Template";
export interface TeamOrder {
    id?: string;
    name: string;
    createdAt?: Date;
    productionDeadLine?: Date;
    availableTemplates: Template[];
    status: "OPEN" | "TO_PRODUCE" | "PRODUCED" | "SHIPPED" | "BILLED";
}
