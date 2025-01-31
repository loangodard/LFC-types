import { Image } from "../Drive/Image";
export interface CustomizationCanva {
    id?: number;
    backgroundImage: Image;
    x: number;
    y: number;
    width: number;
    height: number;
    JSONCanva?: string;
}
