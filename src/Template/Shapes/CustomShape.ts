import { Shape } from "./Shape";

export interface CustomShape extends Shape {
    width: number
    height: number
    svgPath: string
}
