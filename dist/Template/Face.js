"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Face = void 0;
class Face {
    constructor(side, sameOnBothSocks = true, steps, canva, feet // If not provided, it means it's the same for both feet
    ) {
        this.side = side;
        this.sameOnBothSocks = sameOnBothSocks;
        this.steps = steps;
        this.canva = canva;
        this.feet = feet;
        this.side = side;
        this.sameOnBothSocks = sameOnBothSocks;
        if (!sameOnBothSocks && !feet) {
            throw new Error("If the face is different for each foot, you must provide the feet");
        }
        this.feet = feet;
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
