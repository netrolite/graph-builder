import { useContext } from "react";
import { AnimDataContext } from "../../App";
import { changeProp, changePropBool } from "../functions";

export default function Physics() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    return (
        <div className="input-group">
            <label htmlFor="velocity" className="form-label heading">Physics</label>
            <div className="input-subgroup">
                <label htmlFor="velocity" className="form-label">Velocity</label>
                <input
                    type="number"
                    min={1}
                    id="velocity"
                    name="velocity"
                    data-prop="velocity"
                    className="form-control"
                    value={animData.velocity}
                    onChange={e => changeProp(e, setAnimData)}
                />
            </div>

            <div className="input-subgroup">
                <label htmlFor="shapes-amount" className="form-label">Amount of Shapes</label>
                <input
                    type="number"
                    min={1}
                    id="shapes-amount"
                    name="amount of shapes"
                    data-prop="shapesAmount"
                    className="form-control"
                    value={animData.shapesAmount}
                    onChange={e => changeProp(e, setAnimData)}
                />
            </div>

            <div className="input-subgroup">
                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="gravity"
                        name="gravity"
                        data-prop="gravity"
                        onChange={e => changePropBool(e, setAnimData, true)}
                        checked={animData.gravity}
                    />
                    <label htmlFor="gravity">Gravity</label>
                </div>

                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="collisions"
                        name="collisions"
                        data-prop="collisions"
                        onChange={e => changePropBool(e, setAnimData, true)}
                        checked={animData.collisions}
                    />
                    <label htmlFor="collisions">Collisions</label>
                </div>
            </div>

            {
                animData.gravity
                && (
                    <div className="input-subgroup">
                        <label htmlFor="friction" className="form-label">Friction</label>
                        <div className="d-flex align-items-center">
                            <div className="range-value">
                                {animData.friction}
                            </div>
                            <input
                                type="range"
                                step="0.01"
                                min="1.1"
                                max="4"
                                id="friction"
                                name="friction"
                                data-prop="friction"
                                className="form-range"
                                value={animData.friction}
                                onChange={e => changeProp(e, setAnimData)}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}