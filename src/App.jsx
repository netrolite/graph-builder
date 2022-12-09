import { createContext, useEffect, useRef } from "react"

export default function App() {
	const canvasRef = useRef(null);
	
	useEffect(() => {
		window.addEventListener("resize", update);
		/** @type {CanvasRenderingContext2D} */
		let ctx = canvasRef.current.getContext("2d");

		const colorArray = [
			'#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
			'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
			'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
			'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
			'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
			'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
			'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
			'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
			'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
			'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
		];
		

		function paint() {
			generateCircles(canvasRef.current, 100000, 20, ["darkblue", "green"], 1); 

			function generateCircles(canvas, amount, radius, colors, lineWidth) {
				const startTime = new Date().getTime();
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
				console.log(new Date().getTime() - startTime)
			}




			// ctx.arc(60, 60, 50, 0, Math.PI * 2);
			// ctx.fillStyle = "darkblue";
			// ctx.fill();

			// function animate() {
			// 	requestAnimationFrame(animate);
			// 	console.log("frame")
			// }

			// animate();

		}

		

		function resizeCanvas(canvas) {
			canvas.style.width = "100%";
			canvas.style.height = "100%";
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}

		function update() {
			resizeCanvas(canvasRef.current);
			paint();
		}
		
		update();
		return () => {
			window.removeEventListener("resize", update);
		}
	}, [])



    return (
		<main className="container-fluid p-3">
			<canvas ref={canvasRef} width="1880" height="920" className="border border-primary rounded" />
		</main>
  	)
}
