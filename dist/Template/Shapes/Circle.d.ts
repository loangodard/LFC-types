import { Shape } from "./Shape";
export declare class Circle extends Shape {
    radius: number;
    color: string;
    constructor(radius: number, color: string, x: number, y: number);
    setColor(color: string): void;
}
