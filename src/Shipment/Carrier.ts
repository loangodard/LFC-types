import { Shipment } from "./Shipment";

export interface ItemToShip { sku: string; quantity: number; }


export interface LabelData {
    base64Label: string;
    trackingNumber: string;
    trackingUrl: string;
};

export interface Carrier {
    name: string;
    offers: string[];
    generateLabel: (shipment: Shipment) => Promise<LabelData>;
}