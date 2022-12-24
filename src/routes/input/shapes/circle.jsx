import Shape from "./shape";

export default class Circle extends Shape {
    constructor(radius, ...args) {
        super(...args);
        this.x = Math.random() * (this.canvas.width - radius * 2) + radius;
        this.y = Math.random() * (this.canvas.height - radius * 2) + radius;
        this.radius = radius;
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
        if (this.gravity) {
            // if hit left or right wall
            if (
                this.x + this.vx < this.radius
                || this.x + this.vx > this.canvas.width - this.radius
            ) {
                // reverse vx and divide by friction
                // divide vy by friction
                this.vx /= -this.friction;
                this.vy /= this.friction;
            }
            // if hit ceiling or floor
            else if (
                this.y + this.vy < this.radius
                || this.y + this.vy > this.canvas.height - this.radius
            ) {
                // reverse vy and divide by friction
                // divide vx by friction
                this.vy /= -this.friction;
                this.vx /= this.friction;
            }
            else {
                this.vy += this.gravity / 20;
            }
        }
        // use simplified algorithm if gravity is off
        else {
            // if hit left or right wall
            if (
                this.x + this.vx < this.radius
                || this.x + this.vx > this.canvas.width - this.radius
            ) {
                    this.vx = -this.vx;
            }
            else if (
                this.y + this.vy < this.radius
                || this.y + this.vy > this.canvas.height - this.radius
            ) {
                this.vy = -this.vy;
            }
        }

        this.x += this.vx;
        this.y += this.vy;
        this.setVelocities();
        this.draw();
    }
}