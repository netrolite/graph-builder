import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Input({animData, setAnimData}) {
    // changes "Amount of Shapes", "Velocity"...
    function changeProp(e) {
        setAnimData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    

    // changes rect width, rect height, circle radius...
    function changeShapeProp(e, isBoolean) {
        // example:
        // e.target.name === "rectangles"
        // e.target.dataset.shapeProp === "height"
        // if isBoolean, use "checked" attribute insead of "value" because value for checkboxes is always "on"
        console.log(e.target.name);
        console.log(e.target.shapeProp);
        setAnimData(prevState => {
            const prop = e.target.dataset.shapeProp;
            return {
                ...prevState,
                [e.target.name]: {
                    ...prevState[e.target.name],
                    [prop]: isBoolean ? e.target.checked : e.target.value
                }
            }   
        })
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

                {/* name attribute is for identifying the shape */}
                {/* id attribute is for label working correctly */}
                {/* data attribute is for identifying the shape prop (width, height, radius...) */}
                <label htmlFor="rect-width" className="form-label text">Width</label>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="number"
                        id="rect-width"
                        name="rectangles"
                        data-shape-prop="width"
                        onChange={e => changeShapeProp(e)}
                        value={animData.rectangles.width}
                    />
                </div>

                <label htmlFor="rect-height" className="form-label text">Height</label>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="number"
                        id="rect-height"
                        name="rectangles"
                        data-shape-prop="height"
                        onChange={e => changeShapeProp(e)}
                        value={animData.rectangles.height}
                    />
                </div>

                <div className="input-group-checkboxes">
                    <div className="d-flex align-items-center gap-2 mb-0">
                        <input
                            className="input-checkbox type"
                            type="checkbox"
                            id="rect-filled"
                            name="rectangles"
                            data-shape-prop="filled"
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="rect-filled" className="text">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

    if (animData.circles.checked) {
        circlesSettingsNode = (
            <div className="shape-settings">
                <p className="heading mb-2 fw-semibold">Circles Settings</p>

                <label htmlFor="circ-radius" className="form-label text">Radius</label>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="number"
                        id="circ-radius"
                        name="circles"
                        data-shape-prop="radius"
                        onChange={e => changeShapeProp(e)}
                        value={animData.circles.radius}
                    />
                </div>

                <div className="mb-4">
                    <div className="d-flex align-items-center gap-2 mb-0">
                        <input
                            className="input-checkbox type"
                            type="checkbox"
                            id="circ-filled"
                            name="circles"
                            data-shape-prop="filled"
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="circ-filled" className="text">Filled</label>
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
                    onChange={e => changeProp(e)}
                />
            </div>

            {/* Velocity */}
            <label htmlFor="velocity" className="form-label heading fw-semibold">Velocity</label>
            <div className="input-group mb-4">
                <input
                    type="number"
                    min={1}
                    id="velocity"
                    name="velocity"
                    className="form-control"
                    value={animData.velocity}
                    onChange={e => changeProp(e)}
                />
            </div>


            {/* Types of shapes */}
            <p className="heading mb-2 fw-semibold">Types of Shapes</p>

            <div className="mb-4">
                <div className="d-flex align-items-center gap-2 mb-0">
                    <input
                        className="input-checkbox type"
                        type="checkbox"
                        id="rect-checked"
                        name="rectangles"
                        data-shape-prop="checked"
                        onChange={e => changeShapeProp(e, true)}
                        checked={animData.rectangles.checked}
                    />
                    <label htmlFor="rect-checked" className="text">Rectangles</label>
                </div>

                <div className="d-flex align-items-center gap-2 mb-3">
                    <input
                        className="input-checkbox type"
                        type="checkbox"
                        id="circ-checked"
                        name="circles"
                        data-shape-prop="checked"
                        onChange={e => changeShapeProp(e, true)}
                        checked={animData.circles.checked}
                    />
                    <label htmlFor="circ-checked" className="text">Circles</label>
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
