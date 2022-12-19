import { useState, useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import { changeShapeProp, toggleRandomValue } from "../functions";

export default function RectSettings() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);
    
    // if rectangles checkbox is unchecked
    if (!animData.rectangles.checked) return null;

    return (
        <div className="input-group">
            <label className="form-label heading">Rectangles Settings</label>
            {/* name attribute is for identifying the shape */}
            {/* id attribute is for label working correctly */}
            {/* data attribute is for identifying the shape prop (width, height, radius...) */}
            <div className="input-subgroup">
                <label htmlFor="rect-width" className="form-label">Width</label>
                <input
                    className="form-control"
                    type="number"
                    id="rect-width"
                    name="rect-width"
                    data-shape-prop="width"
                    data-shape="rectangles"
                    onChange={e => changeShapeProp(e, setAnimData)}
                    value={animData.rectangles.width}
                />

                <button
                    type="button"
                    className="button button-small mt-2"
                    onClick={() => toggleRandomValue(setAnimData, "rectangles", "widthRand")}
                >
                    {
                        animData.rectangles.widthRand
                        ? "Use Static Value"
                        : "Use Random Value"
                    }
                </button>
            </div>

            <div className="input-subgroup">
                <label htmlFor="rect-height" className="form-label">Height</label>
                <input
                    className="form-control"
                    type="number"
                    id="rect-height"
                    name="rect-height"
                    data-shape-prop="height"
                    data-shape="rectangles"
                    onChange={e => changeShapeProp(e, setAnimData)}
                    value={animData.rectangles.height}
                />
                <button
                    type="button"
                    className="button button-small mt-2"
                    onClick={() => toggleRandomValue(setAnimData, "rectangles", "heightRand")}
                >
                    {
                        animData.rectangles.heightRand
                        ? "Use Static Value"
                        : "Use Random Value"
                    }
                </button>
            </div>

            <div className="input-subgroup">
                <label htmlFor="rect-corner-radius" className="form-label">Corner Radius</label>
                <input
                    className="form-control"
                    type="number"
                    id="rect-corner-radius"
                    name="rect-corner-radius"
                    data-shape-prop="cornerRadius"
                    data-shape="rectangles"
                    onChange={e => changeShapeProp(e, setAnimData)}
                    value={animData.rectangles.cornerRadius}
                />
            </div>

            <div className="input-subgroup">
                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="rect-filled"
                        name="rect-filled"
                        data-shape-prop="filled"
                        data-shape="rectangles"
                        checked={animData.rectangles.filled}
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                    />
                    <label htmlFor="rect-filled">Filled</label>
                </div>
            </div>
        </div>
    )
}