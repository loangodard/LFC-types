export interface event {
    eventType: string;
    message: string;
}
export interface CustomAttribute {
    key: string;
    value: string;
}
export interface LineItem {
    id: string;
    title: string;
    sku?: string;
    currentQuantity: number;
    customAttributes: CustomAttribute[];
    templateId?: string;
}
export interface Shipping {
    firstName?: string;
    lastName?: string;
    address1?: string;
    address2?: string;
    company?: string;
    city?: string;
    province?: string;
    country?: string;
    countryCode?: string;
    zip?: string;
    phone?: string;
    email?: string;
    code?: string;
}
export interface ShopifyOrder {
    id: string;
    name: string;
    createdAt: Date;
    displayFulfillmentStatus: string;
    displayFinancialStatus: string;
    lineItems: LineItem[];
    tags: string[];
    note?: string;
    events: event[];
    shipping?: Shipping;
    origin?: string;
}
