import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./Input"
import Animation from "./Animation"

export default function App() {
	const [animData, setAnimData] = useState({
		amount: 10,
		shapeTypes: [
			{
				type: "rectangle",
				width: 80,
				height: 50,
				cornerRadius: 0,
				filled: false,
				borderColor: "#000"
			},
			{
				type: "circle",
				radius: 30,
				filled: false,
				borderColor: "#000"
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