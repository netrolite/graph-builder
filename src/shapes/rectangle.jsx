import Shape from "./shape";

export default class Rectangle extends Shape {
    constructor(width, height, radius, ...args) {
        super(...args);
        this.x = Math.random() * (this.canvas.width - width);
        this.y = Math.random() * (this.canvas.height - height);
        this.width = width;
        this.height = height;
        this.radius = radius;
    }

    draw() {
        if (this.c.roundRect) {
            this.c.beginPath();
            this.c.roundRect(this.x, this.y, this.width, this.height, this.radius);
            this.c.clostPath();
        }
        // roundRect is unavailable in Firefox and probably some versions of IE
        else {
            this.c.beginPath();
            this.c.moveTo(this.x + this.radius, this.y);
            this.c.lineTo(this.x + this.width - this.radius, this.y);
            this.c.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.radius);
            this.c.lineTo(this.x + this.width, this.y + this.height - this.radius);
            this.c.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.radius, this.y + this.height);
            this.c.lineTo(this.x + this.radius, this.y + this.height);
            this.c.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius);
            this.c.lineTo(this.x, this.y + this.radius);
            this.c.quadraticCurveTo(this.x, this.y, this.x + this.radius, this.y);
            this.c.closePath();
        }


        if (this.filled) {
            this.c.fillStyle = this.fillStyle
            this.c.fill();
        }
        this.c.lineWidth = this.lineWidth
        this.c.strokeStyle = this.strokeStyle
        this.c.stroke();
    }
    
    update() {
        // reverse rectangles's direction if it's outside of canvas dimensions
        // positive velocity turns to negative and vice versa
        if (this.gravity) {
            // if hit left or right wall
            if (
                this.x + this.vx < 0
                || this.x + this.width + this.vx > this.canvas.width
            ) {
                this.vx /= -this.friction;
                this.vy /= this.friction;
            }
            // if hit ceiling or floor
            else if (
                this.y + this.vy < 0
                || this.y + this.vy > this.canvas.height - this.height
            ) {
                this.vy /= -this.friction;
                this.vx /= this.friction;
            }
            else {
                this.vy += this.gravity;
            }
        }
        // use simplified algorithm if gravity is off
        else {
            // if hit left or right wall
            if (
                this.x + this.vx < 0
                || this.x + this.vx > this.canvas.width - this.width
            ) {
                this.vx = -this.vx;
            }
            // if hit ceiling or floor
            else if (
                this.y + this.vy < 0
                || this.y + this.vy > this.canvas.height - this.height
            ) {
                this.vy = -this.vy;
            }
        }

        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}