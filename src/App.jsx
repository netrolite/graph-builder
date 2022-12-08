import { createContext, useEffect, useRef } from "react"

export default function App() {
    const canvasRef = useRef(null);

	useEffect(() => {
		resizeCanvas(canvasRef.current);
		window.addEventListener("resize", () => resizeCanvas(canvasRef.current));
		let ctx = canvasRef.current.getContext("2d");

		// π * 2 * radian === 360deg
		// c.arc(x, y, radius, startAngle, endRadian, counterClockwise)
		// endRadian parameter multiplies the passed value by 1 radian (57.296...)
		// c.arc(100, 100, 30, 0, Math.PI * 2) would be a full circle at x: 100 and y: 100 with a radius of 30
		// c.arc(100, 100, 30, 0, Math.PI) would be half of a circle at x: 100 and y: 100 with a radius of 30
		// startAngle must look something like Math.PI * 0.1; Math.PI * 0.5; Math.PI * 1.2...

		// 2 rectangles
		ctx.fillStyle = "green";
		ctx.fillRect(30, 30, 300, 100);
		ctx.fillRect(340, 30, 300, 100);

		// triangle
		ctx.beginPath();
		ctx.strokeStyle = "blue"
		ctx.lineWidth = 4;
		ctx.moveTo(30, 300);
		ctx.lineTo(600, 300);
		ctx.lineTo(30, 400);
		ctx.lineTo(30, 298);
		ctx.stroke();

		ctx.lineWidth = 2.5;
		ctx.strokeStyle = "#000";
		ctx.strokeRect(30, 550, 400, 200);
		
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(230, 650, 75, 0, Math.PI * 2);
		ctx.fill();



		

		function resizeCanvas(canvas) {
			canvas.style.width = "100%";
			canvas.style.height = "100%";
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}
		
		return () => {
			window.removeEventListener("resize", () => resizeCanvas(canvasRef.current));
		}
	}, [])
	
    return (
		<main className="container p-3">
			<canvas ref={canvasRef} className="border border-primary rounded" />
		</main>
  	)
}
