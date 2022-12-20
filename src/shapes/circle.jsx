import Shape from "./shape";

export default class Circle extends Shape {
    constructor(radius, maxRadius, ...args) {
        console.log(radius, maxRadius);
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
    
    update() {
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
        if (this.x < this.radius) {
            this.vx = this.initPositiveVx;
        }
        else if (this.x > this.canvas.width - this.radius) {
            this.vx = this.initNegativeVx;
        }

        if (this.y < this.radius) {
            this.vy = this.initPositiveVy;
        }
        else if (this.y > this.canvas.height - this.radius) {
            this.vy = this.initNegativeVy;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}