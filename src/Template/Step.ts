import { ImageShape } from "./Shapes/ImageShape";
import { Shape } from "./Shapes/Shape";
import { TextShape } from "./Shapes/Text";

export type StepType = "define_image" | "define_color" | "define_text" | "define_font";


export class Step {
    constructor(
        public name: string,
        public type: StepType,
        public description?: string,
    ) {
        this.name = name;
        this.description = description;
    }
};

export class DefineImage extends Step {
    constructor(
        public name: string,
        public imageShape: ImageShape,
        public description?: string,
    ) {
        super(name, "define_image", description);
        this.imageShape = imageShape;
    }
};

export class DefineText extends Step {
    constructor(
        public name: string,
        public text: TextShape,
        public description?: string,
    ) {
        super(name, "define_text", description);
        this.text = text;
    }
};

export class DefineColor extends Step {
    constructor(
        public name: string,
        public shapeToSetColor: Shape,
        public description?: string,
    ) {
        super(name, "define_color", description);
        this.shapeToSetColor = shapeToSetColor;
    }
};

export class DefineFont extends Step {
    constructor(
        public name: string,
        public text: TextShape,
        public description?: string,
    ) {
        super(name, "define_font", description);
        this.text = text;
    }
};