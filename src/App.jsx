import { useEffect, useRef } from "react"

export default function App() {
    const canvasRef = useRef(null);
	useEffect(() => {

	}, [])
	
    return (
		<main className="container">
			<div className="row">
				<div className="col">
					<canvas ref={canvasRef} />
				</div>
			</div>
		</main>	
  	)
}
