import { Link } from "react-router-dom"

export default function SelectMode() {
    return (
        <div className="container main d-flex align-items-center justify-content-center flex-column">
            <h1>Select Mode</h1>
            <div className="mt-2 d-flex flex-column gap-2 align-items-center w-100">
                <Link to="/animInput" className="w-50 d-flex justify-content-center">
                    <button
                        className="button w-100"
                    >
                        Animation
                    </button>
                </Link>

                <Link to="/graphs" className="w-50 d-flex justify-content-center">
                    <button
                        className="button w-100"
                    >
                        Graphs
                    </button>
                </Link>
            </div>
        </div>
    )
}