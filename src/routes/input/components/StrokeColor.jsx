import { useContext } from "react";
import { AnimDataContext } from "../../../App";
import { changeProp } from "../functions";

export default function StrokeColor() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    return (
        <div className="input-group">
            <div className="input-subgroup">
                <label htmlFor="stroke-color" className="form-label heading">Stroke Color</label>
                <div className="input-color-wrapper">
                    <input 
                        type="color"
                        className="form-control form-control-color"
                        value={animData.strokeColor}
                        id="stroke-color"
                        name="stroke-color"
                        data-prop="strokeColor"
                        onChange={e => changeProp(e, setAnimData, true)}
                    />

                    {animData.strokeColor}
                </div>
            </div>
        </div>
    )
}