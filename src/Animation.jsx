import { useEffect, useRef, useContext } from "react"
import { intFromRangeArr } from "./input/functions";
import { AnimDataContext } from "./App";
import Rectangle from "./shapes/rectangle"
import Circle from "./shapes/circle"


export default function Animation() {
	const animData = useContext(AnimDataContext);
	const { velocity, circles, rectangles, shapesAmount, fillColors, strokeColor, bgColor } = animData;
	const canvasRef = useRef();
	console.log(animData);

	useEffect(() => {
		window.addEventListener("resize", resize);
		resize();
		draw();
		return () => {
			window.removeEventListener("resize", resize);
		}
	}, [])

	let shapes = [];
	

	function draw() {
		const canvas = canvasRef.current;
		/** @type {CanvasRenderingContext2D} */ const c = canvas.getContext("2d");
		document.body.style.backgroundColor = bgColor;
		canvas.style.backgroundColor = bgColor;

		let mousePos = {
			x: undefined,
			y: undefined
		}

		window.addEventListener("mousemove", e => {
			mousePos.x = e.clientX;
			mousePos.y = e.clientY;
		})

		window.addEventListener("mouseout", () => {
			mousePos.x = undefined;
			mousePos.y = undefined;
		})
	
		
		if (!shapes.length) {
			// values that can be random
			let circRadius;
			let rectWidth;
			let rectHeight;

			// ["circles", "rectangles"]
			let availableShapes = [];
			if (rectangles.checked) availableShapes.push("rectangle");
			if (circles.checked) availableShapes.push("circle");

			for (let i = 0; i < shapesAmount; i++) {
				// new Cirlce(radius, maxRadius, expansionRange, filled, fillColors, strokeColor, velocity, canvas, c, mousePos);
				// new Rectangle(width, height, maxWidth, cornerRadius, expansionRange, filled, fillColors, strokeColor, velocity, canvas, c, mousePos);
				const newShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];

				if (newShape === "rectangle") {
					// if user wants value to be random, get a random value from range
					if (rectangles.widthRand) {
						rectWidth = intFromRangeArr(rectangles.widthRandRange.range);
					}
					else rectWidth = rectangles.width;

					if (rectangles.heightRand) {
						rectHeight = intFromRangeArr(rectangles.heightRandRange.range);
					}
					else rectHeight = rectangles.height;

					shapes.push(
						new Rectangle(
							rectWidth,
							rectHeight,
							rectWidth + 20, // maxWidth
							rectangles.cornerRadius,
							100, // expansionRange
							rectangles.filled,
							fillColors,
							strokeColor,
							velocity,
							canvas,
							c,
							mousePos
						)
					)
				}
				else if (newShape === "circle") {
					// if user wants value to be random, get a random value from range
					if (circles.radiusRand) {
						circRadius = intFromRangeArr(circles.radiusRandRange.range);
					}
					else circRadius = circles.radius

					shapes.push(
						new Circle(
							circRadius,
							circRadius + 20, // maxRadius
							100, // expansionRange
							circles.filled,
							fillColors,
							strokeColor,
							velocity,
							canvas,
							c,
							mousePos
						)
					)
				}
			}
		}

		function animate() {
			requestAnimationFrame(animate);
			c.clearRect(0, 0, canvas.width, canvas.height);
			shapes.forEach(item => item.update());
		}
		animate();
	}

	function resize() {
		canvasRef.current.width = window.innerWidth;
		canvasRef.current.height = window.innerHeight;
	}

	return (
		<main className="container-fluid p-0">
			<canvas ref={canvasRef} />
		</main>
	)
}
