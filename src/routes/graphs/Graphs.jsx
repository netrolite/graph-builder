import { useEffect, useRef } from "react";

export default function Graphs() {
    const canvasRef = useRef();
    let canvas;
    /** @type {CanvasRenderingContext2D} */ let c;
    let mouse = {
        x: undefined,
        y: undefined
    }
    
    useEffect(() => {
        canvas = canvasRef.current;
        c = canvas.getContext("2d");
        mouse = {
            x: canvas.width / 2,
            y: canvas.height / 2
        }
        resize();
        draw();

        window.addEventListener("resize", () => {
            resize();
            draw();
        })

        window.addEventListener("mousemove", e => {
            setMousePos(e);
            draw();
        })
    }, [])

    function draw() {
        console.log(mouse);
        c.clearRect(0, 0, canvas.width, canvas.height);

        c.strokeStyle = "white";
        c.fillStyle = "white";

        c.beginPath();
        // // starting point
        // c.fillRect(100, 100, 10, 10)
        // // control point
        // c.fillRect(200, 400, 10, 10);
        // // end point
        // c.fillRect(300, 150, 10, 10);

        c.moveTo(canvas.width / 2 - 400, canvas.height / 2);
        
        c.quadraticCurveTo(mouse.x, mouse.y, canvas.width / 2 + 400, canvas.height / 2);

        c.stroke();
        c.closePath();
    }

    function setMousePos(e) {
        mouse = {
            x: e.clientX,
            y: e.clientY
        }
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