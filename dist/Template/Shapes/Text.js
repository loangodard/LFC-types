"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextShape = void 0;
const Shape_1 = require("./Shape");
class TextShape extends Shape_1.Shape {
    constructor(color, x, y, text, font, draggable = false) {
        super(color, x, y, draggable);
        this.color = color;
        this.x = x;
        this.y = y;
        this.text = text;
        this.font = font;
        this.draggable = draggable;
        this.text = text;
        this.font = font;
    }
    setText(text) {
        this.text = text;
    }
    setFont(font) {
        this.font = font;
    }
}
exports.TextShape = TextShape;
