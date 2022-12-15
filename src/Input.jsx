import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Input({animData, setAnimData}) {
    // changes "Amount of Shapes", "Velocity"...
    function changeProp(e) {
        setAnimData(prevState => ({
            ...prevState,
            shapesAmount: e.target.value
        }))
    }
    

    // changes rect width, rect height, circle radius...
    function changeShapeProp(e, isBoolean) {
        // example:
        // e.target.name === "rectangles"
        // e.target.id === "height"
        // if isBoolean, use checked attribute insead of value
        setAnimData(prevState => ({
            ...prevState,
            [e.target.name]: {
                ...prevState.rectangles,
                [e.target.id]: isBoolean ? e.target.checked : e.target.value
            }
        }))
    }


    useEffect(() => {
        console.log(animData.rectangles);
    }, [animData])



    let rectanglesSettingsNode;
    let circlesSettingsNode;

    if (animData.rectangles.checked) {
        rectanglesSettingsNode = (
            <div className="shape-settings">
                <p className="heading mb-2 fw-semibold">Rectangles Settings</p>

                <label htmlFor="width" className="form-label text">Width</label>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="number"
                        id="width"
                        name="rectangles"
                        onChange={e => changeShapeProp(e)}
                        value={animData.rectangles.width}
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
                        value={animData.rectangles.height}
                    />
                </div>

                <div className="mb-4">
                    <div className="d-flex align-items-center gap-2 mb-0">
                        <input
                            className="input-checkbox type"
                            type="checkbox"
                            id="filled"
                            name="rectangles"
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="filled" className="text">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

    else if (animData.circles.checked) {
        circlesSettingsNode = (
            <div className="shape-settings">
                <p className="heading mb-2 fw-semibold">Circles Settings</p>

                <label htmlFor="radius" className="form-label text">Radius</label>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="number"
                        id="radius"
                        name="circles"
                        onChange={e => changeShapeProp(e)}
                        value={animData.circles.radius}
                    />
                </div>

                <div className="mb-4">
                    <div className="d-flex align-items-center gap-2 mb-0">
                        <input
                            className="input-checkbox type"
                            type="checkbox"
                            id="filled"
                            name="circles"
                            onChange={e => changeShapePropBoolean(e)}
                        />
                        <label htmlFor="filled" className="text">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4 fw-semibold">Animation</h1>

            {/* Amount of Shapes */}
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

            {/* Velocity */}
            <label htmlFor="shapes-amount" className="form-label heading fw-semibold">Velocity</label>
            <div className="input-group mb-4">
                <input
                    type="number"
                    min={1}
                    id="velocity"
                    name="velocity"
                    className="form-control"
                    value={animData.velocity}
                    onChange={e => changeVelocity(e)}
                />
            </div>


            {/* Types of shapes */}
            <p className="heading mb-2 fw-semibold">Types of Shapes</p>

            <div className="mb-4">
                <div className="d-flex align-items-center gap-2 mb-0">
                    <input
                        className="input-checkbox type"
                        type="checkbox"
                        id="checked"
                        name="rectangles"
                        onChange={e => changeShapeProp(e)}
                        checked={animData}
                    />
                    <label htmlFor="checked" className="text">Rectangles</label>
                </div>

                <div className="d-flex align-items-center gap-2 mb-3">
                    <input
                        className="input-checkbox type"
                        type="checkbox"
                        id="checked"
                        name="circles"
                        onChange={e => changeShapeProp(e)}
                    />
                    <label htmlFor="checked" className="text">Circles</label>
                </div>
            </div>

            {rectanglesSettingsNode}
            {circlesSettingsNode}

            <div className="mt-5">
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
