import { Shape } from "./Shape";

export class CustomShape extends Shape {
    constructor(public svgPath: string, public width: number, public height: number, color: string, x: number, y: number) {
        super(color, x, y);
        this.width = width;
        this.height = height;
        this.svgPath = svgPath;
    }
}
