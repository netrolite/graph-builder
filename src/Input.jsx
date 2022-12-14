import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Input({animData, setAnimData}) {
    const rectangles = animData.shapeTypes.find(item => item.type === "rectangles");
    const circles = animData.shapeTypes.find(item => item.type === "circles");

    function handleChange(e) {
        // if e.target.name matches animData.shapeTypes.type, returns shapeTypes with updated value (width, height...)
        // if not, leaves array untouched
        // e.target.name can be "rectangles", "circles"...
        const shapeTypesUpdated = animData.shapeTypes.map(item => {
            if (item.type === e.target.name) {
                // item[e.target.id] is item.width, item.height...
                item[e.target.id] = e.target.value;
            }
            return item;
        })

        setAnimData(prevState => {
            console.log(prevState.shapeTypes[0]);
            
            return {
                ...prevState,
                shapeTypes: shapeTypesUpdated
            }
        })
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

    }, [animData])

    const rectanglesChecked = animData.shapeTypes.some(item => {
        if (item.type === "rectangles" && item.checked) return true;
        return false;
    })

    const circlesChecked = animData.shapeTypes.some(item => {
        if (item.type === "circles" && item.checked) return true;
        return false;
    })

    let rectangleSettingsNode;
    let circleSettingsNode;

    animData.shapeTypes.forEach(item => {
        if (!item.checked) return;

        if (item.type === "rectangles") {
            rectangleSettingsNode = (
                <>
                    <p className="heading mb-2 fw-semibold">Rectangles Settings</p>

                    <label htmlFor="width" className="form-label text">Width</label>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="number"
                            id="width"
                            name="rectangles"
                            onChange={e => handleChange(e)}
                            value={rectangles.width}
                        />
                    </div>

                    <label htmlFor="height" className="form-label text">Height</label>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="number"
                            id="height"
                            name="rectangles"
                            onChange={e => handleChange(e)}
                            value={rectangles.height}
                        />
                    </div>
                </>
            )
        }
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

            {/* Types of shapes */}
            <p className="heading mb-2 fw-semibold">Types of Shapes</p>
            <div className="mb-4">
                <div className="d-flex align-items-center gap-2 mb-0">
                    <input
                        className="input-checkbox type"
                        type="checkbox"
                        id="rectangles"
                        name="rectangles"
                        onChange={e => handleChangeCheckbox(e)}
                        value={rectanglesChecked}
                    />
                    <label htmlFor="rectangles" className="text">Rectangles</label>
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
            </div>

            {rectangleSettingsNode}
            {circleSettingsNode}

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