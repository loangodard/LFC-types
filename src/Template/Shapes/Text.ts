import { Shape } from "./Shape";

export class TextShape extends Shape {
    constructor(
        public color: string,
        public x: number,
        public y: number,
        public text: string,
        public font: string,
        public draggable: boolean = false,
    ) {
        super(color, x, y, draggable);
        this.text = text;
        this.font = font;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public setFont(font: string): void {
        this.font = font;
    }
}