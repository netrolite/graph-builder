import { createContext, useEffect, useRef } from "react"

export default function App() {
	function App() {
    const canvasRef = React.useRef();

    React.useEffect(() => {
		window.addEventListener("resize", update);
      update();

      window.setInterval(() => {
          paint(canvasRef.current.getContext("2d"))
      }, 10)
		
		return () => {
			window.removeEventListener("resize", update);
		}
	}, [])


   function paint(ctx) {
			generateCircles(canvasRef.current, 1, 200, ["black", "yellow"], 1); 

			function generateCircles(canvas, amount, radius, colors, lineWidth) {
				ctx.lineWidth = lineWidth;

				for (let i = 0; i < amount; i++) {
					ctx.beginPath();
					ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

					ctx.arc(
						Math.random() * (canvas.width - radius * 2) + radius,
						Math.random() * (canvas.height - radius * 2) + radius,
						radius,
						0,
						Math.PI * 2
					);
					ctx.stroke();
				}
			}
		}

		

		function resizeCanvas(canvas) {
			canvas.style.width = "100%";
			canvas.style.height = "100%";
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}

		function update() {
			resizeCanvas(canvasRef.current);
			paint(canvasRef.current.getContext("2d"));
		}

    return (
					   <main className="container-fluid p-3">
            <canvas
												    ref={canvasRef}
																onClick={() => paint(canvasRef.current.getContext("2d"))};
																className="border border-primary rounded"
													/>
								</main>
    )
}
