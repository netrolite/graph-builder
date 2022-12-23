export default class Shape {
    constructor(expansionRange, filled, fillColors, strokeColor, velocity, gravity, collisions, canvas, c, mousePos) {
        this.strokeStyle = strokeColor;
        this.fillStyle = fillColors[Math.floor(Math.random() * fillColors.length)];
        this.lineWidth = 2;
        this.expansionRange = expansionRange;
        this.canvas = canvas;
        this.c = c;
        this.mousePos = mousePos;
        this.filled = filled;
        this.collisions = collisions;
        this.friction = 1.1;
        if (gravity) this.gravity = 0.1;
        else this.gravity = 0;
        
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
        this.positiveVx = Math.abs(this.vx);
        this.positiveVy = Math.abs(this.vy);
        this.negativeVx = -Math.abs(this.vx);
        this.negativeVy = -Math.abs(this.vy);
    }

    diff(mousePos, shapePos) {
        return Math.abs(mousePos - shapePos);
    }
}