import { Shape } from "./Shape";
export declare class TextShape extends Shape {
    color: string;
    x: number;
    y: number;
    text: string;
    font: string;
    draggable: boolean;
    constructor(color: string, x: number, y: number, text: string, font: string, draggable?: boolean);
    setText(text: string): void;
    setFont(font: string): void;
}
