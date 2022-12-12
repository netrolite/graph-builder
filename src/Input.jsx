import { Link } from "react-router-dom"

export default function Input(props) {
    return (
        <div className="input-wrapper">
        <label htmlFor="shapes-amount" className="form-label">Amount of shapes</label>
        <div className="input-group mb-3">
            <input type="number" id="shapes-mount"  className="form-control" />
        </div>
            
            <input type="color" />
            <input type="password" />

            <Link to="/animation">
                <button type="submit">Start Animation</button>
            </Link>
        </div>
    )
}