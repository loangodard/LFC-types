import { Circle } from "./Circle";
import { CustomShape } from "./CustomShape";
import { Rectangle } from "./Rectangle";

type AllShapesType = Circle | CustomShape | Rectangle;

export class ShapeGroup {
    constructor(public shapes: AllShapesType[]) {
        this.shapes = shapes;
    }
}