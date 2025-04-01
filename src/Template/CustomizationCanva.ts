import { Image } from "../Drive/Image"
import { Step } from "./Step"

export interface CustomizationCanva {
    id?: number
    backgroundImage: Image
    x: number
    y: number
    width: number
    height: number
    JSONCanva?: string
    steps: Step[]
    thumbnail? : Image
}