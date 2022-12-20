import { Link } from "react-router-dom";

export default function StartAnimBtn() {
    return (
        <div className="mt-4">
            <Link to="/animation">
                <button
                    className="button w-100"
                >
                    Start Animation
                </button>
            </Link>
        </div>
    )
}