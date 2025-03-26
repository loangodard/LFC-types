import { Shipment } from "./Shipment";

export interface ItemToShip { sku: string; quantity: number; }

export interface Carrier {
    name: string;
    offers: string[];
    generateLabel: (shipment: Shipment) => string;
}