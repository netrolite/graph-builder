import { useEffect, useRef } from "react";

export default function Graphs() {
    const canvasRef = useRef();
    let canvas;
    /** @type {CanvasRenderingContext2D} */ let c;
    
    useEffect(() => {
        canvas = canvasRef.current;
        c = canvas.getContext("2d");
        resize();
        draw();
    }, [])

    function draw() {
        c.beginPath();
        c.lineWidth = 10;
        c.lineCap = "round"
        c.moveTo(100, 100);
        c.lineTo(200, 300);
        c.stroke();
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    return (
        <main className="container-fluid p-0">
			<canvas ref={canvasRef}>Sorry, your browser isn't supported</canvas>
		</main>
    )
}