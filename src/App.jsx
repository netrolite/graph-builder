import { useEffect, useRef } from "react"

export default function App() {
	const canvasRef = useRef();
	useEffect(() => {
		window.addEventListener("resize", resize);
		console.log("useeffect")
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
		c.lineWidth = 3;
		let mousePos = {
			x: undefined,
			y: undefined
		}

		window.addEventListener("mousemove", e => {
			mousePos.x = e.clientX;
			mousePos.y = e.clientY;
		})
		
		// this is a super class for other classes. Do not call it directly
		class Shape {
			constructor(colors, velocity) {
				this.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
				
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
				this.initVx = this.vx;
				this.initVy = this.vy;
			}
		}

		class Circle extends Shape {
			constructor(radius, ...args) {
				super(...args);
				this.x = Math.random() * (canvas.width - radius * 2) + radius;
				this.y = Math.random() * (canvas.height - radius * 2) + radius;
				this.radius = radius;
			}

			draw() {
				c.beginPath();
				c.strokeStyle = this.strokeStyle;
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				c.stroke();
			}

			update() {
				if (this.x < this.radius || this.x > canvas.width - this.radius) {
					this.vx = -this.initVx;
				}

				if (this.y < this.radius || this.y > canvas.height - this.radius) {
					this.vy = -this.initVy;
				}

				this.x += this.vx;
				this.y += this.vy;
				this.draw();
			}
		}

		class Rectangle extends Shape {
			constructor(width, height, cornerRadius, ...args) {
				super(...args);
				this.x = Math.random() * (canvas.width - width);
				this.y = Math.random() * (canvas.height - height);
				this.width = width;
				this.height = height;
				this.minWidth = width;
				this.minHeight = height;
				this.maxWidth = width + 50;
				this.maxHeight = height + 50;
				this.cornerRadius = cornerRadius;
			}

			diff(mousePos, elemPos) {
				return Math.abs(mousePos - elemPos);
			}

			draw() {
				c.beginPath();
				c.strokeStyle = this.strokeStyle;
				c.roundRect(this.x, this.y, this.width, this.height, this.cornerRadius);
				c.stroke();
			}
			
			update() {
				// grow if cursor is within 50px range
				if (
					this.diff(mousePos.x, this.x + this.width / 2) <= 100
					&& this.diff(mousePos.y, this.y + this.height / 2) <= 100
					&& this.width <= this.maxWidth
				) {
					console.log("grow");
					this.x -= 1;
					this.y -= 1;
					this.width += 2;
					this.height += 2;
				}
				else if (this.width > this.minWidth) {
					console.log("shrink");
					this.x += 1;
					this.y += 1;
					this.width -= 2;
					this.height -= 2;
				}

				// BUG: this code does not accound for cases when this.initVx or this.initVy is negative
				// if is further than canvas's dimensions, reverse direction
				if (this.x < 0 || this.x > canvas.width - this.width) {
					if (this.vx > 0 && this.initVx > 0) this.vx = -this.initVx;
					else this.vx = this.initVx;
				}
				if (this.y < 0 || this.y > canvas.height - this.height) {
					if (this.vy > 0) this.vy = -this.initVy;
					else this.vy = this.initVy;
				}

				this.x += this.vx;
				this.y += this.vy;
				this.draw();
			}
		}

		if (!shapes.length) {
			for (let i = 0; i < 50; i++) {
				// new Rectangle(width, height, borderRadius, velocity);
				shapes.push(new Rectangle(40, 40, [5], ["darkblue"], 1))
				// new Cirlce(radius, velocity);
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
