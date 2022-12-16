import { useEffect, useRef } from "react"
import Rectangle from "./shapes/rectangle"
import Circle from "./shapes/circle"


export default function Animation({animData}) {
	const { rectangles, circles, fillColors } = animData;
	const canvasRef = useRef();

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
		

		// this is a super class for other classes. Do not call it directly
		


		


		


		if (!shapes.length) {
			if (rectangles.checked && circles.checked) {
				for (let i = 0; i < animData.shapesAmount; i++) {
					const velocity = parseInt(animData.velocity)

					const circRadius = parseInt(circles.radius);
					
					const rectWidth = parseInt(rectangles.width);
					const rectHeight = parseInt(rectangles.height);
					const rectCornerRadius = parseInt(rectangles.cornerRadius);
					
					// new Cirlce(radius, maxRadius, expansionRange, colors, velocity, canvas, c, mousePos);
					// new Rectangle(width, height, maxWidth, cornerRadius, expansionRange, colors, velocity, canvas, c, mousePos);
					Math.random() > 0.5
					? shapes.push(
						new Circle(
								circRadius,
								circRadius + 20,
								100,
								fillColors,
								velocity,
								canvas,
								c,
								mousePos
							)
						)
					: shapes.push(
						new Rectangle(
								rectWidth,
								rectHeight,
								rectWidth + 20, // maxWidth
								[rectCornerRadius], // cornerRadius
								100, // expansionRadius
								fillColors,
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
