import { Image } from "../Drive/Image";
import { Template } from "./Template";

export interface Design {
    id?: string;
    createdAt?: Date;
    template?: Template;
    JSONCanvas?: string[];
    thumbnails?: Image[];
}