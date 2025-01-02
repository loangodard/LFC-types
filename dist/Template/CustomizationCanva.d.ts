import { Image } from "../Images/Image";
/**
 * A CustomizationCanva is placed relatively to the backgroundImage
 */
export declare class CustomizationCanva {
    backgroundImage: Image;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(backgroundImage: Image, x?: number, y?: number, width?: number, height?: number);
}
