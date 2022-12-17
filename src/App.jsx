import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./Input"
import Animation from "./Animation"

export default function App() {
	const palettes = [
		["#a1a2a6", "#024959", "#f2C12e", "#f2ae30", "#593e25"],
		["#8C1F28", "#591C21", "#044040", "#D92525", "#F2F2F2"],
		["#363432", "#196774", "#90A19D", "#F0941F", "#EF6024"],
		["#FF4858", "#1B7F79", "#00CCC0", "#72F2EB", "#747F7F"],
		["#BD2A2E", "#3B3936", "#B2BEBF", "#889C9B", "#486966"],
	]
	const randomPalette = palettes[Math.floor(Math.random() * palettes.length)]

	const [animData, setAnimData] = useState({
		shapesAmount: "10",
		rectangles: {
				checked: true,
				width: "60",
				height: "40",
				cornerRadius: "0",
				filled: false
		},
		circles: {
			checked: true,
			radius: "20",
			filled: false
		},
		velocity: "5",
		palettes: palettes,
		fillColors: randomPalette,
		strokeColor: "fff"
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