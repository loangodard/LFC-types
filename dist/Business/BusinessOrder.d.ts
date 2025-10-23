import { Business } from "./Business";
import { BusinessOrderLineItem } from "./BusinessOrderLineItem";
export interface BusinessOrder {
    id: number;
    business: Business;
    businessOrderReference?: string;
    lineItems: BusinessOrderLineItem[];
}
