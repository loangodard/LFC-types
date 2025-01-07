import { Face } from "./Face";

export type TemplateStatus = 'active' | 'inactive';

export interface Template {
    name: string;
    description?: string;
    faces: Face[];
    status: TemplateStatus;
}