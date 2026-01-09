import { SAVOrderLineItem } from "./SAVOrderLineItem";
export interface SAVOrder {
    id: number;
    lineItems: SAVOrderLineItem[];
    status: string;
}
