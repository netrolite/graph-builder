import Shape from "./shape";

export default class Rectangle extends Shape {
    constructor(width, height, maxWidth, radius, ...args) {
        super(...args);
        this.x = Math.random() * (this.canvas.width - width);
        this.y = Math.random() * (this.canvas.height - height);
        this.width = width;
        this.height = height;
        this.minWidth = width;
        this.maxWidth = maxWidth;
        this.radius = radius;
    }

    draw() {
        // doesn't work in Firefox
        // this.c.beginPath();
        // this.c.fillStyle = this.fillStyle;
        // this.c.strokeStyle = this.strokeStyle;
        // this.c.lineWidth = this.lineWidth;
        // this.c.roundRect(this.x, this.y, this.width, this.height, this.radius);
        // this.c.stroke();
        // this.c.fill();

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

        if (this.filled) {
            this.c.fillStyle = this.fillStyle;
            this.c.fill();
        }
        this.c.lineWidth = this.lineWidth;
        this.c.strokeStyle = this.strokeStyle;
        this.c.stroke();
    }
    
    update() {
        // grow if cursor is within 100px range from the rectangle's center
        if (
            this.diff(this.mousePos.x, this.x + this.width / 2) <= this.expansionRange
            && this.diff(this.mousePos.y, this.y + this.height / 2) <= this.expansionRange
            && this.width <= this.maxWidth
        ) {
            this.x -= 1;
            this.y -= 1;
            this.width += 2;
            this.height += 2;
        }
        else if (this.width > this.minWidth) {
            this.x += 1;
            this.y += 1;
            this.width -= 2;
            this.height -= 2;
        }


        // reverse rectangles's direction if it's outside of canvas dimensions
        // positive velocity turns to negative and vice versa
        if (this.x < 0) {
            this.vx = this.initPositiveVx;
        }
        else if (this.x > this.canvas.width - this.width) {
            this.vx = this.initNegativeVx;
        }

        if (this.y < 0) {
            this.vy = this.initPositiveVy;
        }
        else if (this.y > this.canvas.height - this.height) {
            this.vy = this.initNegativeVy;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}