import { createContext, useEffect, useRef } from "react"

export default function App() {
    const canvasRef = useRef(null);

	useEffect(() => {
		const startTime = new Date().getTime();
		/** @type {CanvasRenderingContext2D} */
		let ctx = canvasRef.current.getContext("2d");

		const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

		for (let i = 0; i < 10000; i++) {
			ctx.beginPath();
			ctx.strokeStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
			ctx.lineWidth = Math.floor(Math.random() * 4) + 1;
			ctx.arc(Math.random() * 880 + 20, Math.random() * 880 + 20, 20, 0, Math.PI * 2);
			ctx.stroke();
		}

		console.log(new Date().getTime() - startTime);
	}, [])



    return (
		<main className="container p-3">
			<canvas ref={canvasRef} width="920" height="920" className="border border-primary rounded" />
		</main>
  	)
}
