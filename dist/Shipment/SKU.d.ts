import { Dimensions } from "./ShippingPackaging";
export interface SKU {
    sku: string;
    weight: number;
    dimensions: Dimensions;
}
