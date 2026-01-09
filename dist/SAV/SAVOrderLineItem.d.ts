import { SKU } from "../Shipment/SKU";
export interface SAVOrderLineItem {
    id: number;
    quantity: number;
    sku: SKU;
    designId?: number;
    templateId?: number;
}
