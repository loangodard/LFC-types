import { Shape } from "./Shape";

export interface TextShape extends Shape {
    color: string,
    x: number,
    y: number,
    text: string,
    font: string,
    draggable: boolean
}