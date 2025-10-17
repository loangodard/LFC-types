import { Dimensions } from "./ShippingPackaging";

export interface SKU {
    id?: number;
    sku: string;
    weight: number;
    dimensions: Dimensions
    availableQuantity: number;
    reservedQuantity: number;
    destroyedQuantity: number;
}