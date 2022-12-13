import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Input({animData, setAnimData}) {

    function handleChange(e) {
        // if class contains "type", it means it's "Types of Shapes" checkbox
        setAnimData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // only for handling checkboxes
    function handleChangeCheckbox(e) {
        // if checkbox is related to "Types of Shapes" (Rectangles, Circles...)
        if (e.target.classList.contains("type")) {
            const updatedShapeTypes = animData.shapeTypes.map(item => {
                // change item's checked property to e.target.checked (true or false)
                if (item.type === e.target.name) {
                    item.checked = e.target.checked;
                }
                return item
            })
            setAnimData(prevState => ({
                ...prevState,
                shapeTypes: updatedShapeTypes
            }))
        }
    }

    useEffect(() => {
        console.log(animData.shapeTypes);
    }, [animData])

    const rectanglesChecked = animData.shapeTypes.some(item => {
        if (item.type === "rectangles" && item.checked) return true;
        return false;
    })

    const circlesChecked = animData.shapeTypes.some(item => {
        if (item.type === "circles" && item.checked) return true;
        return false;
    })

    return (
        <div className="container mt-4">
            <h1 className="mb-4 fw-semibold">Animation</h1>

            <label htmlFor="shapes-amount" className="form-label heading fw-semibold">Amount of Shapes</label>
            <div className="input-group mb-4">
                <input
                    type="number"
                    min={1}
                    id="shapes-amount"
                    name="shapesAmount"
                    className="form-control"
                    value={animData.shapesAmount}
                    onChange={e => handleChange(e)}
                />
            </div>

            <p className="heading mb-2 fw-semibold">Types of Shapes</p>
            <div className="d-flex align-items-center gap-2 mb-0">
                <input
                    className="input-checkbox type"
                    type="checkbox"
                    id="rectangles"
                    name="rectangles"
                    onChange={e => handleChangeCheckbox(e)}
                    value={rectanglesChecked}
                />
                <label htmlFor="rectangle" className="text">Rectangles</label>
            </div>

            <div className="d-flex align-items-center gap-2 mb-3">
                <input
                    className="input-checkbox type"
                    type="checkbox"
                    id="circles"
                    name="circles"
                    onChange={e => handleChangeCheckbox(e)}
                    value={circlesChecked}
                />
                <label htmlFor="circles" className="text">Circles</label>
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