import { SKU } from "../Shipment/SKU";
import { BusinessOrder } from "./BusinessOrder";

export interface BusinessOrderLineItem {
    id: number;
    productName: string;
    quantity: number;
    sku: SKU;
    designId?: number;
    templateId?: number;
    businessProductReference?: string;
}