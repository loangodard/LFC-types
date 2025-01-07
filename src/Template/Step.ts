import { ImageShape } from "./Shapes/ImageShape";
import { Shape } from "./Shapes/Shape";
import { TextShape } from "./Shapes/Text";

export type StepType = "define_image" | "define_color" | "define_text" | "define_font";


export interface Step {
    name: string
    type: StepType
    description?: string
};

export interface DefineImage extends Step {
    name: string,
    imageShape: ImageShape,
    description?: string,
};

export interface DefineText extends Step {
    name: string,
    text: TextShape,
    description?: string,
};

export interface DefineColor extends Step {
    name: string,
    shapeToSetColor: Shape,
    description?: string,
};

export interface DefineFont extends Step {
    name: string,
    text: TextShape,
    description?: string,
};