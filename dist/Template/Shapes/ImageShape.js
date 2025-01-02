"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageShape = void 0;
const Shape_1 = require("./Shape");
class ImageShape extends Shape_1.Shape {
    constructor(image, x, y, width, height) {
        super("", x, y);
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.width = width;
        this.height = height;
    }
}
exports.ImageShape = ImageShape;
