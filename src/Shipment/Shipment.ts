import { Shipping } from "../Shopify/ShopifyOrder";
import { Carrier, ItemToShip } from "./Carrier";
import { ShippingPackaging } from "./ShippingPackaging";


export interface Shipment {
    id?: number;
    createdAt: Date;
    orderId?: string;
    trackingNumber?: string;
    trackingUrl?: string;
    base64Label?: string;
    items: ItemToShip[];
    itemsWeight: number;
    shippingPackaging: ShippingPackaging;
    carrier: Carrier;
    offer: string;
    shippingData: Shipping
}