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
				c.lineWidth = 3;
				c.strokeStyle = this.strokeStyle;
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				c.stroke();
			}

			update() {
				if (this.x < this.radius || this.x > canvas.width - this.radius) {
					this.vx = -this.vx;
				}

				if (this.y < this.radius || this.y > canvas.height - this.radius) {
					this.vy = -this.vy;
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
				this.cornerRadius = cornerRadius;
			}

			draw() {
				c.beginPath();
				c.strokeStyle = this.strokeStyle;
				c.roundRect(this.x, this.y, this.width, this.height, this.cornerRadius);
				c.stroke();
			}

			update() {
				if (this.x < 0 || this.x > canvas.width - this.width) {
					this.vx = -this.vx;
				}

				if (this.y < 0 || this.y > canvas.height - this.height) {
					this.vy = -this.vy;
				}

				this.x += this.vx;
				this.y += this.vy;
				this.draw();
			}
		}

		if (!shapes.length) {
			for (let i = 0; i < 1000; i++) {
				Math.random() > 0.5
				// new Rectangle(width, height, borderRadius, velocity);
				? shapes.push(new Rectangle(40, 40, [5], ["red", "green", "blue"], 1))
				// new Cirlce(radius, velocity);
				: shapes.push(new Circle(20, ["darkblue", "darkgreen"], 1));
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
