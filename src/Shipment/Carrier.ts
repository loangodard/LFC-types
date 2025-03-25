export interface ItemToShip { sku: string; quantity: number; }

export interface Carrier {
    name: string;
    offers: string[];
    generateLabel: (
        orderId: string,
        itemsToShip: ItemToShip[],
        offer: string
    ) => string;
}