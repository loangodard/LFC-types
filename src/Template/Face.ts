import { CustomizationCanva } from "./CustomizationCanva";
import { Step } from "./Step";

export type FaceSide = "external" | "internal" | "front" | "back";
export type Feet = "left" | "right" | "both";

export interface Face {
    id: number
    key: string
    side: FaceSide
    feet: Feet
    canva?: CustomizationCanva
    name?: string
    faceOrderOnTemplate?: number
}