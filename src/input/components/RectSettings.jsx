import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import { changeShapeProp } from "../functions";

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
                <div className="input-elem">
                    <input
                        className="form-control"
                        type="number"
                        id="rect-width"
                        name="rectangles"
                        data-shape-prop="width"
                        onChange={e => changeShapeProp(e, setAnimData)}
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
                        onChange={e => changeShapeProp(e, setAnimData)}
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
                        onChange={e => changeShapeProp(e, setAnimData)}
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
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                    />
                    <label htmlFor="rect-filled">Filled</label>
                </div>
            </div>
        </div>
    )
}