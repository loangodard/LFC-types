import { Business } from "./Business";
import { BusinessOrderLineItem } from "./BusinessOrderLineItem";
import { Recipient } from "./Recipient";

export interface BusinessOrder {
    id: number;
    businessOrderReference?: string;
}