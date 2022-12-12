import { useEffect, useRef } from "react"

export default function App() {
	const canvasRef = useRef();
	useEffect(() => {
		window.addEventListener("resize", resize);
		resize();
		draw();
		return () => {
			window.removeEventListener("resize", resize);
		}
	}, [])
	
	let shapes = [];
	
	function draw() {
		const canvas = canvasRef.current;
		/** @type {CanvasRenderingContext2D} */ const c = canvas.getContext("2d");

		let mousePos = {
			x: undefined,
			y: undefined
		}

		window.addEventListener("mousemove", e => {
			mousePos.x = e.clientX;
			mousePos.y = e.clientY;
		})

		window.addEventListener("mouseout", () => {
			mousePos.x = undefined;
			mousePos.y = undefined;
		})
		
		// this is a super class for other classes. Do not call it directly
		class Shape {
			constructor(colors, velocity) {
				this.strokeStyle = "white";
				this.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				this.lineWidth = 3;
				
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

		class Rectangle extends Shape {
			constructor(width, height, maxWidth, cornerRadius, expansionRange, ...args) {
				super(...args);
				this.x = Math.random() * (canvas.width - width);
				this.y = Math.random() * (canvas.height - height);
				this.width = width;
				this.height = height;
				this.minWidth = width;
				this.maxWidth = maxWidth;
				this.cornerRadius = cornerRadius;
				this.expansionRange = expansionRange;
			}

			draw() {
				c.beginPath();
				c.fillStyle = this.fillStyle;
				c.strokeStyle = this.strokeStyle;
				c.lineWidth = this.lineWidth;
				c.roundRect(this.x, this.y, this.width, this.height, this.cornerRadius);
				c.stroke();
				c.fill();
			}
			
			update() {
				// grow if cursor is within 100px range from the rectangle's center
				if (
					this.diff(mousePos.x, this.x + this.width / 2) <= this.expansionRange
					&& this.diff(mousePos.y, this.y + this.height / 2) <= this.expansionRange
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
				else if (this.x > canvas.width - this.width) {
					this.vx = this.initNegativeVx;
				}

				if (this.y < 0) {
					this.vy = this.initPositiveVy;
				}
				else if (this.y > canvas.height - this.height) {
					this.vy = this.initNegativeVy;
				}

				this.x += this.vx;
				this.y += this.vy;
				this.draw();
			}
		}

		class Circle extends Shape {
			constructor(radius, maxRadius, expansionRange, ...args) {
				super(...args);
				this.x = Math.random() * (canvas.width - radius * 2) + radius;
				this.y = Math.random() * (canvas.height - radius * 2) + radius;
				this.radius = radius;
				this.minRadius = radius;
				this.maxRadius = maxRadius;
				this.expansionRange = expansionRange;
			}

			draw() {
				c.beginPath();
				c.fillStyle = this.fillStyle;
				c.strokeStyle = this.strokeStyle;
				c.lineWidth = this.lineWidth;
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				c.stroke();
				c.fill();
			}

			update() {
				// grow if cursor is within 100px range from the circles's center
				if (
					this.diff(mousePos.x, this.x) <= this.expansionRange
					&& this.diff(mousePos.y, this.y) <= this.expansionRange
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
				else if (this.x > canvas.width - this.radius) {
					this.vx = this.initNegativeVx;
				}

				if (this.y < this.radius) {
					this.vy = this.initPositiveVy;
				}
				else if (this.y > canvas.height - this.radius) {
					this.vy = this.initNegativeVy;
				}

				this.x += this.vx;
				this.y += this.vy;
				this.draw();
			}
		}

		if (!shapes.length) {
			for (let i = 0; i < 100; i++) {
				// new Cirlce(radius, maxRadius, expansionRange, colors, velocity);
				// new Rectangle(width, height, maxWidth, cornerRadius, expansionRange, colors, velocity);
				Math.random() > 0.5
				? shapes.push(new Circle(10, 40, 100, ["darkblue", "darkgreen"], 1))
				: shapes.push(new Rectangle(20, 40, 80, [4], 100, ["darkgreen", "darkblue"], 1))
			}
		}

		function animate() {
			requestAnimationFrame(animate);
			c.clearRect(0, 0, canvas.width, canvas.height);
			shapes.forEach(item => item.update());
		}
		animate();
	}

	function resize() {
		canvasRef.current.width = window.innerWidth;
		canvasRef.current.height = window.innerHeight;
	}

	return (
		<main className="container-fluid p-0">
			<canvas ref={canvasRef} />
		</main>
	)
}
