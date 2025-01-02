import { Image } from "../../Images/Image";
import { Shape } from "./Shape";

export class ImageShape extends Shape {
    constructor(
        public image: Image,
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {
        super("", x, y);
        this.image = image;
        this.width = width;
        this.height = height;
    }
}