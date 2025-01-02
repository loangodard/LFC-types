import { Image } from "../../Images/Image";
import { Shape } from "./Shape";
export declare class ImageShape extends Shape {
    image: Image;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(image: Image, x: number, y: number, width: number, height: number);
}
