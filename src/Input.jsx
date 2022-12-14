import { useEffect } from "react"
import { Link, RouterProvider } from "react-router-dom"

export default function Input({animData, setAnimData}) {
    const rectangles = animData.shapeTypes.find(item => item.type === "rectangles");
    const circles = animData.shapeTypes.find(item => item.type === "circles");


    function changeAmount(e) {
        setAnimData(prevState => ({
            ...prevState,
            shapesAmount: e.target.value
        }))
    }
    
    
    // toggle "checked" prop
    function changeShapeTypesChecked(e) {
        setAnimData(prevState => {
            const newShapeTypes = prevState.shapeTypes.map(item => {
                // e.target.name can be "rectangles", "circles"...
                if (item.type === e.target.name) {
                    item.checked = e.target.checked
                }
                return item;
            })

            return {
                ...prevState,
                shapeTypes: newShapeTypes
            }
        })
    }


    // change a property of a shape. e.g "width", "height", "radius"...
    function changeShapeProp(e) {
        setAnimData(prevState => {
            const newShapeTypes = prevState.shapeTypes.map(item => {
                // e.target.name can be "rectanges", "circles"...
                if (item.type === e.target.name) {
                    item[e.target.id] = e.target.value;
                }
                return item;
            })

            return {
                ...prevState,
                shapeTypes: newShapeTypes
            }
        })
    }

    useEffect(() => {
        console.log(animData.shapeTypes[0]);
    }, [animData])


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
                            onChange={e => changeShapeProp(e)}
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
                            onChange={e => changeShapeProp(e)}
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
                    onChange={e => changeAmount(e)}
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
                        onChange={e => changeShapeTypesChecked(e)}
                    />
                    <label htmlFor="rectangles" className="text">Rectangles</label>
                </div>

                <div className="d-flex align-items-center gap-2 mb-3">
                    <input
                        className="input-checkbox type"
                        type="checkbox"
                        id="circles"
                        name="circles"
                        onChange={e => changeShapeTypesChecked(e)}
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