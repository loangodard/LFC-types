import { CustomizationCanva } from "./CustomizationCanva";
import { Step } from "./Step";
export type FaceSide = "external" | "internal" | "front" | "back";
export type Feet = "left" | "right" | "both";
export declare class Face {
    side: FaceSide;
    feet: Feet;
    steps: Step[][];
    canva: CustomizationCanva;
    key: string;
    constructor(side: FaceSide, feet: Feet, steps: Step[][], canva: CustomizationCanva);
}
