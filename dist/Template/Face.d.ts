import { CustomizationCanva } from "./CustomizationCanva";
import { Step } from "./Step";
export type FaceSide = "external" | "internal" | "front" | "back";
export type Feet = "left" | "right";
export declare class Face {
    side: FaceSide;
    sameOnBothSocks: boolean;
    steps: Step[][];
    canva: CustomizationCanva;
    feet?: Feet | undefined;
    constructor(side: FaceSide, sameOnBothSocks: boolean | undefined, steps: Step[][], canva: CustomizationCanva, feet?: Feet | undefined);
}
