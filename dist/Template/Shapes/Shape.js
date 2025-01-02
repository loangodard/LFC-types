"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, x, y, draggable = false) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.draggable = draggable;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    setColor(color) {
        this.color = color;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
}
exports.Shape = Shape;
