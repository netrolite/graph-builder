import { useEffect, useRef } from "react"

export default function App() {
    const canvasRef = useRef(null);

	useEffect(() => {
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		
		// c === context
		let c = canvasRef.current.getContext("2d");
		fillRectCenter(400, 400);


		
		function fillRectCenter(x, y) {
			const centerX = canvasRef.current.offsetWidth / 2 - x / 2;
			const centerY = canvasRef.current.offsetHeight / 2 - y / 2;
			c.fillRect(centerX, centerY, x, y);
		}

		function resizeCanvas() {
			canvasRef.current.width = canvasRef.current.offsetWidth;
			canvasRef.current.height = canvasRef.current.offsetHeight;
		}
		
		return () => {
			window.removeEventListener("resize", resizeCanvas);
		}
	}, [])
	
    return (
		<main className="container min-vh-100 p-3">
			<canvas ref={canvasRef} className="w-100 border border-primary rounded hgt-600" />
		</main>
  	)
}
