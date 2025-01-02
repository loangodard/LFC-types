import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(public width: number, public height: number, color: string, x: number, y: number) {
        super(color, x, y)
        this.width = width;
        this.height = height;
    }
}
