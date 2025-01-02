import { Face } from "./Face";

export class Template {
    constructor(
        public name: string,
        public faces: Face[],
        public description?: string,
    ) {
        this.name = name;
        this.faces = faces;
        this.description = description;
    }

    addFace(face: Face) {
        this.faces.push(face);
    }

    removeFace(face: Face) {
        this.faces = this.faces.filter(f => f !== face);
    }

    editFace(face: Face, newFace: Face) {
        this.faces = this.faces.map(f => f === face ? newFace : f);
    }
}