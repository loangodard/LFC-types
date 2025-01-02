export declare class Shape {
    color: string;
    x: number;
    y: number;
    draggable: boolean;
    constructor(color: string, x: number, y: number, draggable?: boolean);
    setColor(color: string): void;
    setX(x: number): void;
    setY(y: number): void;
}
