export default class Shape {
    constructor(expansionRange, colors, velocity, canvas, c, mousePos) {
        this.strokeStyle = "white";
        this.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        this.lineWidth = 3;
        this.expansionRange = expansionRange;
        this.canvas = canvas;
        this.c = c;
        this.mousePos = mousePos;
        
        const randVx = Math.random() - 0.5;
        const randVy = Math.random() - 0.5;
        const rand = Math.random();
        if (rand >= 0.66) {
            this.vx = randVx >= 0 ? randVx * velocity + velocity : randVx * velocity - velocity;
            this.vy = randVy >= 0 ? randVy * velocity + velocity : randVy * velocity - velocity;
        }
        else if (rand >= 0.33) {
            this.vx = randVx * velocity;
            this.vy = randVy >= 0 ? randVy * velocity + velocity : randVy * velocity - velocity;
        }
        else {
            this.vx = randVx >= 0 ? randVx * velocity + velocity : randVx * velocity - velocity;
            this.vy = randVy * velocity;
        }
        this.initPositiveVx = Math.abs(this.vx);
        this.initPositiveVy = Math.abs(this.vy);
        this.initNegativeVx = -Math.abs(this.vx);
        this.initNegativeVy = -Math.abs(this.vy);
    }

    diff(mousePos, shapePos) {
        return Math.abs(mousePos - shapePos);
    }
}