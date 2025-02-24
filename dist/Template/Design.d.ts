import { Image } from "../Drive/Image";
import { Template } from "./Template";
export interface Design {
    id?: number;
    createdAt?: Date;
    template?: Template;
    JSONCanva?: string;
    thumbnails?: Image[];
}
