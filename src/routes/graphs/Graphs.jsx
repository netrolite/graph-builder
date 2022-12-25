import { useEffect, useRef } from "react";

export default function Graphs() {
    const canvasRef = useRef();
    let canvas;
    /** @type {CanvasRenderingContext2D} */ let c;

    // default mouse position
    let mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - window.innerWidth / 4
    }
  
    useEffect(() => {
        canvas = canvasRef.current;
        c = canvas.getContext("2d");
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
        // clear screen
        c.clearRect(0, 0, canvas.width, canvas.height);


        // qurve start and end points
        const startX = canvas.width / 2 - canvas.width / 4;
        const startY = canvas.height / 2;
        const endX = canvas.width / 2 + canvas.width / 4;
        const endY = canvas.height / 2;

        // middle points of the right and left imaginary (gray) lines
        let leftLineMidX;
        let leftLineMidY;
        let rightLineMidX;
        let rightLineMidY;

        // X MIDDLE POINTS
        // if cursor is to the left from start point
        if (mouse.x < startX) {
            leftLineMidX = mouse.x + diff(mouse.x, startX) / 2;
        }
        else {
            leftLineMidX = startX + diff(startX, mouse.x) / 2;
        }

        // if cursor is to the right from end point
        if (mouse.x > endX) {
            rightLineMidX = endX + diff(endX, mouse.x) / 2;
        }
        else {
            rightLineMidX = mouse.x + diff(mouse.x, endX) / 2;
        }


        // Y MIDDLE POINTS
        // if cursor is above the start and end points
        if (mouse.y > startY) {
            leftLineMidY = startY + diff(startY, mouse.y) / 2;
            rightLineMidY = startY + diff(startY, mouse.y) / 2;
        }
        else {
            leftLineMidY = mouse.y + diff(startY, mouse.y) / 2;
            rightLineMidY = mouse.y + diff(startY, mouse.y) / 2;
        }

        
        // lines
        c.beginPath();
        c.strokeStyle = "gray";
        c.moveTo(startX, startY);
        // from start point to control point
        c.lineTo(mouse.x, mouse.y);
        // from control point to end
        c.lineTo(endX, endY);

        // middle line from left to right
        c.moveTo(leftLineMidX, leftLineMidY);
        c.lineTo(rightLineMidX, rightLineMidY);
        c.stroke();


        // circles
        // start point
        c.beginPath();
        c.fillStyle = "white";
        c.arc(startX, startY, 5, 0, Math.PI * 2);
        c.fill();
        // control point
        c.beginPath();
        c.fillStyle = "gray";
        c.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
        c.fill();
        // end point
        c.beginPath();
        c.fillStyle = "white";
        c.arc(endX, endY, 5, 0, Math.PI * 2);
        c.fill();


        // the curve itself
        c.strokeStyle = "white"
        c.moveTo(startX, startY);
        c.quadraticCurveTo(mouse.x, mouse.y, endX, endY);

        c.stroke();
    }

    function diff(int1, int2) {
        return Math.abs(int1 - int2);
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
        <main className="container-fluid overflow-hidden p-0">
			<canvas ref={canvasRef}>Sorry, your browser isn't supported</canvas>
		</main>
    )
}