"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
class Template {
    constructor(name, faces, description) {
        this.name = name;
        this.faces = faces;
        this.description = description;
        this.name = name;
        this.faces = faces;
        this.description = description;
    }
    addFace(face) {
        this.faces.push(face);
    }
    removeFace(face) {
        this.faces = this.faces.filter(f => f !== face);
    }
    editFace(face, newFace) {
        this.faces = this.faces.map(f => f === face ? newFace : f);
    }
}
exports.Template = Template;
