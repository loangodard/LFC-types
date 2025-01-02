import { ImageShape } from "./ImageShape";

export class ImageGroup {
    constructor(public images: ImageShape[]) {
        this.images = images;
    }
}