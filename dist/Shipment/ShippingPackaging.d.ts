export interface Dimensions {
    length: number;
    width: number;
    height: number;
}
export interface ShippingPackaging {
    id?: number;
    dimensions: Dimensions;
    emptyWeight: number;
}
