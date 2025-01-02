export class Shape {
    constructor(public color: string, public x: number, public y: number, public draggable: boolean = false) {
        this.color = color;
        this.x = x;
        this.y = y;
        
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public setY(y: number): void {
        this.y = y;
    }
}