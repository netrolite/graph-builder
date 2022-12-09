import { createContext, useEffect, useRef } from "react"

export default function App() {
	const canvasRef = useRef();
	
    useEffect(() => {
		window.addEventListener("resize", update);
		update();
		return () => {
			window.removeEventListener("resize", update);
		}
	}, [])
	
	class Circle {
		constructor(canvas, c, radius, velocity) {
			this.canvas = canvas;
			this.c = c;
			this.radius = radius;
			this.velocity = velocity;
			this.x = Math.trunc(Math.random() * (this.canvas.width - radius * 2) + radius);
			this.y = Math.trunc(Math.random() * (this.canvas.height - radius * 2) + radius);
			this.dx = Math.trunc((Math.random() - 0.5) * this.velocity);
			this.dy = Math.trunc((Math.random() - 0.5) * this.velocity);
		}

		draw() {
			this.c.fillStyle = "darkblue";
			this.c.beginPath();
			this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			this.c.fill();
		}

		update() {
			if (this.x < this.radius || this.x > this.canvas.offsetWidth - this.radius) {
				this.dx = -this.dx;
			}
			
			if (this.y < this.radius || this.y > this.canvas.offsetHeight - this.radius) {
				this.dy = -this.dy;
			}
			
			this.x += this.dx;
			this.y += this.dy;
		}
	}
	
	function draw(canvas) {
		let circle = new Circle(canvas, canvas.getContext("2d"), 30, 10);
		circle.draw();
		
		// BUG: changing x or y doesn't re-draw the circle
		function animate() {
			console.log("animate");
			requestAnimationFrame(animate);
			circle.update();
		}
		animate();
	}
	
	function resizeCanvas(canvas) {
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	}
	
	function update() {
		resizeCanvas(canvasRef.current);
		draw(canvasRef.current);
	}
	
    return (
		<main className="container-fluid p-3">
            <canvas
				ref={canvasRef}
				onClick={() => paint(canvasRef.current, canvasRef.current.getContext("2d"))}
				className="border border-primary rounded"
			/>
		</main>
    )
}
