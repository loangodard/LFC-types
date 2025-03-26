import { Shipping } from "../Shopify/ShopifyOrder";
import { Carrier, ItemToShip } from "./Carrier";
import { ShippingPackaging } from "./ShippingPackaging";


export interface Shipment {
    id?: number;
    createdAt: Date;
    orderId?: string;
    trackingNumber?: string;
    items: ItemToShip[];
    shippingPackaging: ShippingPackaging;
    carrier: Carrier;
    offer: string;
    shippingData: Shipping
}