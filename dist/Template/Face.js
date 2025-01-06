"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Face = void 0;
class Face {
    constructor(side, feet, steps, canva) {
        this.side = side;
        this.feet = feet;
        this.steps = steps;
        this.canva = canva;
        this.feet = feet;
        this.side = side;
        this.key = `${side}-${feet}`;
        // verify that all steps has length > 0
        for (let i = 0; i < steps.length; i++) {
            if (steps[i].length === 0) {
                throw new Error("All steps must have at least one element");
            }
        }
        // Verify that on each step, all subSteps are of the same type
        for (let i = 0; i < steps.length; i++) {
            let type = steps[i][0].type;
            if (steps[i].length === 1) {
                continue;
            }
            else {
                for (let j = 0; j < steps[i].length; j++) {
                    if (steps[i][j].type !== type) {
                        throw new Error("All steps on the same array must be of the same type");
                    }
                    else {
                        type = steps[i][j].type;
                    }
                }
            }
        }
        this.steps = steps;
        this.canva = canva;
    }
}
exports.Face = Face;
