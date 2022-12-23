import Shape from "./shape";

export default class Circle extends Shape {
    constructor(radius, maxRadius, ...args) {
        super(...args);
        this.x = Math.random() * (this.canvas.width - radius * 2) + radius;
        this.y = Math.random() * (this.canvas.height - radius * 2) + radius;
        this.radius = radius;
        this.minRadius = radius;
        this.maxRadius = maxRadius;
    }

    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.c.closePath();
        
        if (this.filled) {
            this.c.fillStyle = this.fillStyle;
            this.c.fill();
        }
        this.c.lineWidth = this.lineWidth;
        this.c.strokeStyle = this.strokeStyle;
        this.c.stroke();
    }

    // sets all velocities
    setVelocities() {
        this.positiveVx = Math.abs(this.vx);
        this.positiveVy = Math.abs(this.vy);
        this.negativeVx = -Math.abs(this.vx);
        this.negativeVy = -Math.abs(this.vy);
    }

    
    update() {
        const prevVx = this.vx;
        const prevVy = this.vy;
        let hitFloor = false;

        // grow if cursor is within 100px range from the circles's center
        if (
            this.diff(this.mousePos.x, this.x) <= this.expansionRange
            && this.diff(this.mousePos.y, this.y) <= this.expansionRange
            && this.radius <= this.maxRadius
        ) {
            this.radius += 1;
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        // reverse circles's direction if it's outside of canvas dimensions
        // positive velocity turns to negative and vice versa
        // if hit left wall
        if (this.x < this.radius) {
            this.vx = this.positiveVx / this.friction;
        }
        // if hit right wall
        else if (this.x > this.canvas.width - this.radius) {
            this.vx = this.negativeVx / this.friction;
        }

        // if hit ceiling
        if (this.y < this.radius) {
            this.vy = this.positiveVy / this.friction;
        }
        // if hit floor
        else if (this.y > this.canvas.height - this.radius) {
            this.vy = this.negativeVy / this.friction;
            hitFloor = true;
        }

        // if is not hitting the floor, increase gravity
        if (!hitFloor) this.vy += this.gravity;
        this.x += prevVx;
        this.y += prevVy;
        this.setVelocities();
        this.draw();
    }
}