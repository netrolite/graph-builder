import { useContext } from "react"
import { AnimDataContext } from "../../App"
import { changeShapeProp } from "../functions"

export default function ShapeTypes() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    return (
        <div className="input-group">
            <label className="form-label heading">Types of Shapes</label>

            <div className="input-subgroup">
                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="rect-checked"
                        name="rect-checked"
                        data-shape="rectangles"
                        data-shape-prop="checked"
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                        checked={animData.rectangles.checked}
                    />
                    <label htmlFor="rect-checked">Rectangles</label>
                </div>

                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="circ-checked"
                        name="circ-checked"
                        data-shape="circles"
                        data-shape-prop="checked"
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                        checked={animData.circles.checked}
                    />
                    <label htmlFor="circ-checked">Circles</label>
                </div>
            </div>
        </div>
    )
}