import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./Input"
import Animation from "./Animation"

export default function App() {
	const [animData, setAnimData] = useState({
		shapesAmount: "10",
		shapeTypes: [
			{
				type: "rectangles",
				checked: false,
				width: "60",
				height: "40",
				cornerRadius: "0",
				filled: false
			},
			{
				type: "circles",
				checked: false,
				radius: "20",
				filled: false
			}
		],
		velocity: 4,
		colors: ["#A1A2A6", "#024959", "#F2C12E", "#F2AE30", "#593E25"]
	})

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Input
								animData={animData}
								setAnimData={setAnimData}
							/>
						} />
					<Route
						path="/animation"
						element={
							<Animation
								animData={animData}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}