import { useContext } from "react"
import { AnimDataContext } from "../../../App"
import { changeShapeProp, toggleRandomValue, changeRange } from "../functions";

export default function CircSettings() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    // if circles checkbox is unchecked
    if (!animData.circles.checked) return null;

    return (
        <div className="input-group">
            <label className="form-label heading">Circles Settings</label>

            <div className="input-subgroup">
                <label htmlFor="circ-radius" className="form-label">Radius</label>
                {
                    animData.circles.radiusRand
                    ? (
                        <div className="grid-2-cols">

                            <div className="d-flex">
                                <div className="input-prefix">From</div>
                                <input
                                    type="number"
                                    className="form-control rounded-start-0"
                                    id="circ-radius"
                                    name="circle radius"
                                    min="1"
                                    value={animData.circles.radiusRandRange[0]}
                                    onChange={e => changeRange(e, setAnimData, "circles", "radiusRandRange", 0)}
                                />
                            </div>

                            <div className="d-flex">
                                <div className="input-prefix">To</div>
                                <input
                                    type="number"
                                    className="form-control rounded-start-0"
                                    id="circ-radius"
                                    name="circle radius"
                                    min="1"
                                    value={animData.circles.radiusRandRange[1]}
                                    onChange={e => changeRange(e, setAnimData, "circles", "radiusRandRange", 1)}
                                />
                            </div>

                        </div>
                    )
                    : (
                        <input
                            className="form-control"
                            type="number"
                            min="1"
                            id="circ-radius"
                            name="circle radius"
                            data-shape-prop="radius"
                            data-shape="circles"
                            onChange={e => changeShapeProp(e, setAnimData)}
                            value={animData.circles.radius}
                        />
                    )
                }

                <button
                    type="button"
                    className="button button-small mt-2"
                    onClick={() => toggleRandomValue(setAnimData, "circles", "radiusRand")}
                >
                    {
                        animData.circles.radiusRand
                        ? "Use Static Value"
                        : "Use Random Value"
                    }
                </button>
            </div>

            <div className="input-subgroup">
                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="circ-filled"
                        name="circle filled"
                        data-shape-prop="filled"
                        data-shape="circles"
                        checked={animData.circles.filled}
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                    />
                    <label htmlFor="circ-filled">Filled</label>
                </div>
            </div>
        </div>
    )
}