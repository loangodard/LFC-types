"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationCanva = void 0;
const Image_1 = require("../Images/Image");
/**
 * A CustomizationCanva is placed relatively to the backgroundImage
 */
class CustomizationCanva {
    // x,y,width,height are pourcentage of the backgroundImage
    constructor(backgroundImage = new Image_1.Image(""), x = .5, y = .5, width = .5, height = .5) {
        this.backgroundImage = backgroundImage;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.backgroundImage = backgroundImage;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
exports.CustomizationCanva = CustomizationCanva;
