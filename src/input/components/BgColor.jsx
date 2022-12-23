import { useContext } from "react";
import { AnimDataContext } from "../../App";
import { changeProp } from "../functions";

export default function BgColor() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    return (
        <div className="input-group">
            <div className="input-subgroup">
                <label htmlFor="bg-color" className="form-label heading">Background Color</label>
                <div className="input-color-wrapper">
                    <input 
                        type="color"
                        className="form-control form-control-color"
                        value={animData.bgColor}
                        id="bg-color"
                        name="bg-color"
                        data-prop="bgColor"
                        onChange={e => changeProp(e, setAnimData, true)}
                    />

                    {animData.bgColor}
                </div>
            </div>
        </div>
    )
}