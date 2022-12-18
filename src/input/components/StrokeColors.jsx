import { useContext } from "react";
import { AnimDataContext, SetAnimDataContext } from "../../App";
import { changeProp } from "../functions";

export default function StrokeColor() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

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
                        name="strokeColor"
                        onChange={e => changeProp(e, setAnimData)}
                    />

                    {animData.strokeColor}
                </div>
            </div>
        </div>
    )
}