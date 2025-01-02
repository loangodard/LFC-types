"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(radius, color, x, y) {
        super(color, x, y);
        this.radius = radius;
        this.color = color;
        this.radius = radius;
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}
exports.Circle = Circle;
;
