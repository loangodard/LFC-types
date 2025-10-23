import { BusinessOrder } from "./BusinessOrder";
export interface Recipient {
    id: number;
    businessOrder: BusinessOrder;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}
