"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomShape = void 0;
const Shape_1 = require("./Shape");
class CustomShape extends Shape_1.Shape {
    constructor(svgPath, width, height, color, x, y) {
        super(color, x, y);
        this.svgPath = svgPath;
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
        this.svgPath = svgPath;
    }
}
exports.CustomShape = CustomShape;
