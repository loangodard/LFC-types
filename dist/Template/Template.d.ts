import { Face } from "./Face";
export declare class Template {
    name: string;
    faces: Face[];
    description?: string | undefined;
    constructor(name: string, faces: Face[], description?: string | undefined);
    addFace(face: Face): void;
    removeFace(face: Face): void;
    editFace(face: Face, newFace: Face): void;
}
