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


    function changeColor(e) {
        
        setAnimData(prevState => {
            let newFillColors = [...prevState.fillColors]
            newFillColors[e.target.id] = e.target.value;

            return {
                ...prevState,
                fillColors: newFillColors
            }
        })
    }


    let rectanglesSettingsNode;
    let circlesSettingsNode;

    const fillColorsNode = animData.fillColors.map((item, index) => {
        return (
            <div className="input-subgroup input-color-wrapper" key={index}>
                <input
                    type="color"
                    className="form-control form-control-color"
                    value={item}
                    id={index}
                    onChange={changeColor}
                />

                <div className="color-hex">
                    {item}
                </div>
            </div>
        )
    })

    if (animData.rectangles.checked) {
        rectanglesSettingsNode = (
            <div className="input-group">
                <label className="form-label heading">Rectangles Settings</label>
                {/* name attribute is for identifying the shape */}
                {/* id attribute is for label working correctly */}
                {/* data attribute is for identifying the shape prop (width, height, radius...) */}
                <div className="input-subgroup">
                    <label htmlFor="rect-width" className="form-label">Width</label>
                    <div className="input-elem">
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
                </div>

                <div className="input-subgroup">
                    <label htmlFor="rect-height" className="form-label">Height</label>
                    <div className="input-elem">
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
                </div>

                <div className="input-subgroup">
                    <label htmlFor="rect-corner-radius" className="form-label">Corner Radius</label>
                    <div className="input-elem">
                        <input
                            className="form-control"
                            type="number"
                            id="rect-corner-radius"
                            name="rectangles"
                            data-shape-prop="cornerRadius"
                            onChange={e => changeShapeProp(e)}
                            value={animData.rectangles.cornerRadius}
                        />
                    </div>
                </div>

                <div className="input-subgroup">
                    <div className="checkbox-group">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="rect-filled"
                            name="rectangles"
                            data-shape-prop="filled"
                            checked={animData.rectangles.filled}
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="rect-filled">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

    if (animData.circles.checked) {
        circlesSettingsNode = (
            <div className="input-group">
                <label className="form-label heading">Circles Settings</label>

                <div className="input-subgroup">
                    <label htmlFor="circ-radius" className="form-label">Radius</label>
                    <div className="input-elem">
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
                </div>

                <div className="input-subgroup">
                    <div className="checkbox-group">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="circ-filled"
                            name="circles"
                            data-shape-prop="filled"
                            checked={animData.circles.filled}
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="circ-filled">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4 fw-semibold">Animation</h1>

            <div className="inputs">

                {/* Amount of Shapes */}
                <div className="input-group">
                    <div className="input-subgroup">
                        <label htmlFor="shapes-amount" className="form-label heading">Amount of Shapes</label>
                        <div className="input-elem">
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
                    </div>
                </div>

                {/* Velocity */}
                <div className="input-group">
                    <div className="input-subgroup">
                        <label htmlFor="velocity" className="form-label heading">Velocity</label>
                        <div className="input-elem">
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
                    </div>
                </div>


                {/* Types of shapes */}
                <div className="input-group">
                    <label className="form-label heading">Types of Shapes</label>

                    <div className="input-subgroup">
                        <div className="checkbox-group">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rect-checked"
                                name="rectangles"
                                data-shape-prop="checked"
                                onChange={e => changeShapeProp(e, true)}
                                checked={animData.rectangles.checked}
                            />
                            <label htmlFor="rect-checked">Rectangles</label>
                        </div>

                        <div className="checkbox-group">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="circ-checked"
                                name="circles"
                                data-shape-prop="checked"
                                onChange={e => changeShapeProp(e, true)}
                                checked={animData.circles.checked}
                            />
                            <label htmlFor="circ-checked">Circles</label>
                        </div>
                    </div>
                </div>

                {/* Colors */}
                <div className="input-group">
                    <label className="form-label heading">Fill Colors</label>
                    {/* input-color-list-wrapper fixes safari bug when rows are too large */}
                    <div className="input-color-list-wrapper" style={{display: "grid"}}>
                        <div className="input-color-list">
                            {fillColorsNode}
                        </div>
                    </div>
                </div>

                {rectanglesSettingsNode}
                {circlesSettingsNode}

            </div>

            {/* "Start Animation" button */}
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
