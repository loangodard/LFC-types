import { ImageShape } from "./Shapes/ImageShape";
import { Shape } from "./Shapes/Shape";
import { TextShape } from "./Shapes/Text";
export type StepType = "define_image" | "define_color" | "define_text" | "define_font";
export declare class Step {
    name: string;
    type: StepType;
    description?: string | undefined;
    constructor(name: string, type: StepType, description?: string | undefined);
}
export declare class DefineImage extends Step {
    name: string;
    imageShape: ImageShape;
    description?: string | undefined;
    constructor(name: string, imageShape: ImageShape, description?: string | undefined);
}
export declare class DefineText extends Step {
    name: string;
    text: TextShape;
    description?: string | undefined;
    constructor(name: string, text: TextShape, description?: string | undefined);
}
export declare class DefineColor extends Step {
    name: string;
    shapeToSetColor: Shape;
    description?: string | undefined;
    constructor(name: string, shapeToSetColor: Shape, description?: string | undefined);
}
export declare class DefineFont extends Step {
    name: string;
    text: TextShape;
    description?: string | undefined;
    constructor(name: string, text: TextShape, description?: string | undefined);
}
