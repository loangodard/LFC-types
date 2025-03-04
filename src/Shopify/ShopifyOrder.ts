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
    sku: string;
    currentQuantity: number;
    customAttributes: CustomAttribute[];
}

export interface ShopifyOrder {
    id: string;
    name: string;
    createdAt: Date;
    displayFulfillmentStatus: string;
    displayFinancialStatus: string;
    lineItems: LineItem[];
    tags: string[];
    note: string;
    events: event[];
}