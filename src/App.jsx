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
		c.strokeStyle = "red"

		// this is a super class for other classes. Do not call it directly
		class Shape {
			constructor(velocity) {
				const randVx = Math.random() - 0.5;
				const randVy = Math.random() - 0.5;
				this.vx = randVx >= 0 ? randVx * velocity + velocity : randVx * velocity - velocity;
				this.vy = randVy >= 0 ? randVy * velocity + velocity : randVy * velocity - velocity;
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
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				c.fill();
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
			constructor(width, height, ...args) {
				super(...args);
				this.x = Math.random() * (canvas.width - width);
				this.y = Math.random() * (canvas.height - height);
				this.width = width;
				this.height = height;
			}

			draw() {
				c.beginPath();
				c.strokeRect(this.x, this.y, this.width, this.height);
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
			for (let i = 0; i < 1; i++) {
				shapes.push(new Rectangle(200, 100, 2))
			}
		}

		function animate() {
			requestAnimationFrame(animate);
			c.clearRect(0, 0, canvas.width, canvas.height);
			shapes.forEach(item => item.draw());
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
