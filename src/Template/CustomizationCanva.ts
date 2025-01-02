import { Image } from "../Images/Image"

/**
 * A CustomizationCanva is placed relatively to the backgroundImage
 */
export class CustomizationCanva {
    // x,y,width,height are pourcentage of the backgroundImage
    constructor(
        public backgroundImage: Image,
        public x: number = .5,
        public y: number = .5,
        public width: number = .5,
        public height: number = .5
    ) {
        this.backgroundImage = backgroundImage
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}