"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefineFont = exports.DefineColor = exports.DefineText = exports.DefineImage = exports.Step = void 0;
class Step {
    constructor(name, type, description) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.name = name;
        this.description = description;
    }
}
exports.Step = Step;
;
class DefineImage extends Step {
    constructor(name, imageShape, description) {
        super(name, "define_image", description);
        this.name = name;
        this.imageShape = imageShape;
        this.description = description;
        this.imageShape = imageShape;
    }
}
exports.DefineImage = DefineImage;
;
class DefineText extends Step {
    constructor(name, text, description) {
        super(name, "define_text", description);
        this.name = name;
        this.text = text;
        this.description = description;
        this.text = text;
    }
}
exports.DefineText = DefineText;
;
class DefineColor extends Step {
    constructor(name, shapeToSetColor, description) {
        super(name, "define_color", description);
        this.name = name;
        this.shapeToSetColor = shapeToSetColor;
        this.description = description;
        this.shapeToSetColor = shapeToSetColor;
    }
}
exports.DefineColor = DefineColor;
;
class DefineFont extends Step {
    constructor(name, text, description) {
        super(name, "define_font", description);
        this.name = name;
        this.text = text;
        this.description = description;
        this.text = text;
    }
}
exports.DefineFont = DefineFont;
;
