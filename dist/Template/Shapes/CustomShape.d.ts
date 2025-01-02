import { Shape } from "./Shape";
export declare class CustomShape extends Shape {
    svgPath: string;
    width: number;
    height: number;
    constructor(svgPath: string, width: number, height: number, color: string, x: number, y: number);
}
