import { changeShapeProp } from "../functions"

export default function ShapeTypes({animData, setAnimData}) {
    return (
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
                        onChange={e => changeShapeProp(e, true, setAnimData)}
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
                        onChange={e => changeShapeProp(e, true, setAnimData)}
                        checked={animData.circles.checked}
                    />
                    <label htmlFor="circ-checked">Circles</label>
                </div>
            </div>
        </div>
    )
}