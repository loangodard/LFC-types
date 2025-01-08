import { Image } from "../../Drive/Image";
import { Shape } from "./Shape";

export interface ImageShape extends Shape {
    image: Image,
    x: number,
    y: number,
    width: number,
    height: number
}