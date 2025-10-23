import { Business } from "./Business";
import { BusinessOrderLineItem } from "./BusinessOrderLineItem";
import { Recipient } from "./Recipient";

export interface BusinessOrder {
    id: number;
    business: Business;
    businessOrderReference?: string;
    lineItems: BusinessOrderLineItem[];
    recipient: Recipient
}