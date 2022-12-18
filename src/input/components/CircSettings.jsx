import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import { changeShapeProp } from "../functions";

export default function CircSettings() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    // if circles checkbox is unchecked
    if (!animData.circles.checked) return null;

    return (
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
                        onChange={e => changeShapeProp(e, setAnimData)}
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
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                    />
                    <label htmlFor="circ-filled">Filled</label>
                </div>
            </div>
        </div>
    )
}