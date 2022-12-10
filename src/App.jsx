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
	
	let circles = [];

	function draw() {
		const canvas = canvasRef.current;
		/** @type {CanvasRenderingContext2D} */ const c = canvas.getContext("2d");
		c.strokeStyle = "red"

		// this is a super class for other classes. Do not call it directly
		class Shape {
			constructor(velocity) {
				this.vx = (Math.random() - 0.5) * velocity;
				this.vy = (Math.random() - 0.5) * velocity;
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
		}

		if (!circles.length) {
			for (let i = 0; i < 1; i++) {
				circles.push(new Circle(20, 6));
			}
		}

		function animate() {
			requestAnimationFrame(animate);
			c.clearRect(0, 0, canvas.width, canvas.height);
			circles.forEach(item => item.update());
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
