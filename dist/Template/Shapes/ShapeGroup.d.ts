import { Circle } from "./Circle";
import { CustomShape } from "./CustomShape";
import { Rectangle } from "./Rectangle";
type AllShapesType = Circle | CustomShape | Rectangle;
export declare class ShapeGroup {
    shapes: AllShapesType[];
    constructor(shapes: AllShapesType[]);
}
export {};
