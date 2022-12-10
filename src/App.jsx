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

		class Circle {
			constructor(radius, velocity) {
				this.x = Math.random() * (canvas.width - radius * 2) + radius;
				this.y = Math.random() * (canvas.height - radius * 2) + radius;
				this.vx = (Math.random() - 0.5) * velocity;
				this.vy = (Math.random() - 0.5) * velocity;
				this.radius = radius;

			}

			draw() {
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				c.fillStyle = "purple";
				c.fill();
				c.strokeStyle = "blue"
				c.lineWidth = 3;
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

		if (!circles.length) {
			for (let i = 0; i < 100; i++) {
				circles.push(new Circle(1, 5))
			}
		}

		function animate() {
			requestAnimationFrame(animate);
			c.clearRect(0, 0, canvas.width, canvas.height);
			circles.forEach(item => {
				item.update();
			});
		}
		animate();
	}

	function resize() {
		canvasRef.current.width = canvasRef.current.offsetWidth;
		canvasRef.current.height = canvasRef.current.offsetHeight;
	}

	return (
		<main className="container-fluid p-2">
			<canvas ref={canvasRef} className="border border-2 border-primary rounded" />
		</main>
	)
}
