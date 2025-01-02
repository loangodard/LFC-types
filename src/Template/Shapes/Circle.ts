import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(
        public radius: number,
        public color: string,
        x: number,
        y: number
    ) {
        super(color, x, y);
        this.radius = radius;
        this.color = color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
};