import { Link } from "react-router-dom"

export default function Input({setAnimData}) {
    return (
        <div className="container mt-4">
            <h1 className="mb-4 fw-semibold">Animation</h1>

            <label htmlFor="shapes-amount" className="form-label heading fw-semibold">Amount of Shapes</label>
            <div className="input-group mb-4">
                <input type="number" id="shapes-amount"  className="form-control" />
            </div>

            <p className="heading mb-2 fw-semibold">Types of Shapes</p>
            <div className="d-flex align-items-center gap-2 mb-0">
                <input
                    className="input-checkbox"
                    type="checkbox"
                    checked=""
                    id=""
                />
                <label htmlFor="Rectangles" className="text">Rectangles</label>
            </div>

            <div className="d-flex align-items-center gap-2 mb-3">
                <input
                    className="input-checkbox"
                    type="checkbox"
                    checked=""
                    id=""
                />
                <label htmlFor="Rectangles" className="text">Circles</label>
            </div>

            <div className="mt-4">
                <Link to="/animation">
                    <button
                        type="submit"
                        className="btn w-100"
                    >
                        Start Animation
                    </button>
                </Link>
            </div>
        </div>
    )
}