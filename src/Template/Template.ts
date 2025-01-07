import { Face } from "./Face";

export interface Template {
    name: string;
    description?: string;
    faces: Face[];
}