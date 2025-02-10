import { ImageShape } from "./Shapes/ImageShape";
import { Shape } from "./Shapes/Shape";
import { TextShape } from "./Shapes/Text";
export type StepType = "define_image" | "change_shape" | "define_color" | "define_text" | "define_font";
export declare const allowed_languages: string[];
export interface TranslateText {
    language: typeof allowed_languages[number];
    text: string;
}
export interface Step {
    id?: number;
    name: TranslateText[];
    type: StepType;
    description?: TranslateText[];
    objectId: string;
    stepNumber: number;
}
export interface DefineImage extends Step {
    name: TranslateText[];
    imageShape: ImageShape;
    description?: [TranslateText];
}
export interface DefineText extends Step {
    name: TranslateText[];
    text: TextShape;
    description?: [TranslateText];
}
export interface DefineColor extends Step {
    name: TranslateText[];
    shapeToSetColor: Shape;
    description?: TranslateText[];
}
export interface DefineFont extends Step {
    name: TranslateText[];
    text: TextShape;
    description?: TranslateText[];
}
