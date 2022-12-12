import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Input from "./Input"
import Animation from "./Animation"

export default function App() {
	const [animData, setAnimData] = useState({
		amount: 10,
		shapeTypes: ["circle", "rectangle"],
		velocity: 4,
		fillColors: ["green", "darkblue"]
	})

	return (
		<main className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Input setAnimData={setAnimData} />} />
					<Route path="/animation" element={<Animation animData={animData} />} />
				</Routes>
			</BrowserRouter>
		</main>
	)
}